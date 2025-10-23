import express from "express";
import User from "../models/User.js";

const router = express.Router();

/**
 * @route POST /api/transfer
 * @desc Transfer money between users
 * @body { senderId, receiverId, amount }
 */
router.post("/transfer", async (req, res) => {
  const { senderId, receiverId, amount } = req.body;

  try {
    if (!senderId || !receiverId || !amount)
      return res.status(400).json({ error: "All fields are required." });

    if (senderId === receiverId)
      return res.status(400).json({ error: "Sender and receiver must be different." });

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver)
      return res.status(404).json({ error: "Sender or receiver not found." });

    if (sender.balance < amount)
      return res.status(400).json({ error: "Insufficient balance in sender’s account." });

    // Logical validation passed
    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    res.status(200).json({
      message: "✅ Transfer successful!",
      transaction: {
        from: sender.name,
        to: receiver.name,
        amount,
        senderBalance: sender.balance,
        receiverBalance: receiver.balance,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
