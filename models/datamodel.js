import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  URL: String,
  userName: String,
  password: String,
});

export default mongoose.models.PasswordManager || mongoose.model("PasswordManager", userSchema);