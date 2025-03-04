import mongoose, { models, Schema } from "mongoose";

const contactSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const contact = models["contact"] || mongoose.model("contact", contactSchema);

export default contact;
