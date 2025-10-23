import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  balance: { type: Number, required: true, min: 0 },
});

const User = mongoose.model("User", userSchema);
export default User;
