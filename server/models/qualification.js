import mongoose from "mongoose";
const qualificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  firstname: String,
  lastname: String,
  email: String,
  completion: Date,
  description: String
});
const Qualification = mongoose.models.Qualification || mongoose.model("Qualification", qualificationSchema);
export default Qualification;
