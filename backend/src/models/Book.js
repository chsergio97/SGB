import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  authors: [{ type: String }],
  description: { type: String, default: "" },
  thumbnail: { type: String, default: "" },
  publishedDate: { type: String, default: "N/A" },
  reservedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  available: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model("Book", bookSchema);
