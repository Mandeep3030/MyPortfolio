import Qualification from "../models/qualification.js";

// Get all qualifications
export const getAllQualifications = async (req, res) => {
  const qualifications = await Qualification.find();
  res.json(qualifications);
};

// Get one qualification
export const getQualificationById = async (req, res) => {
  const qualification = await Qualification.findById(req.params.id);
  res.json(qualification);
};

// Create qualification
export const createQualification = async (req, res) => {
  const qualification = new Qualification(req.body);
  await qualification.save();
  res.status(201).json(qualification);
};

// Update qualification
export const updateQualification = async (req, res) => {
  const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete single qualification
export const deleteQualification = async (req, res) => {
  await Qualification.findByIdAndDelete(req.params.id);
  res.json({ message: "Qualification deleted" });
};

// Delete all qualifications
export const deleteAllQualifications = async (req, res) => {
  await Qualification.deleteMany({});
  res.json({ message: "All qualifications deleted" });
};
