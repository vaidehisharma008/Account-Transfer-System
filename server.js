import express from "express";
import connectDB from "./config/db.js";
import transferRoutes from "./routes/transferRoutes.js";
import User from "./models/User.js";

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", transferRoutes);

// Test route to add sample users
app.post("/api/createUser", async (req, res) => {
  try {
    const { name, balance } = req.body;
    const user = new User({ name, balance });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
