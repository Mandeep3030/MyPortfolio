import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  firstname: String,
  lastname: String,
  email: String,
  completion: Date,
  description: String
});
const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
