import Mark from "../models/markModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

/**
 * @route   POST /api/schedule
 * @desc    Create a new schedule request
 * @access  Private
 * @param   {Object} truckId - The id of the truck (required)
 * @param   {String} area - The area of the collection (required)
 * @param   {String} time - the time of schedule (required)
 * @param   {String} date - the date of schedule (required)
 * @returns {Object} - A JSON object containing the newly created schedule data
 */
const createMark = asyncHandler(async (req, res) => {
  const { user, marks, type } = req.body;

  if (!user || !marks || !type ) {
    res.status(400);
    throw new Error("Please fill all required fields.");
  }

  const mark = new Mark({
    user,
    marks,
    type,
    date: new Date(),
  });

  const createdMark = await mark.save();
  res.status(201).json(createdMark);
});

/**
 * @route   GET /api/schedule
 * @desc    Get all schedule requests (Admin only)
 * @access  Private/Admin
 * @returns {Array} - A list of all schedules
 */
const getAllMarks = asyncHandler(async (req, res) => {
  const marks = await Mark.find({})
  res.json(marks);
});

/**
 * @route   GET /api/schedules/my-schedules
 * @desc    Get all schedules assingd to the truck
 * @access  Private (Authenticated Truck)
 * @returns {Array} - A list of schedules assingd to the truck
 */
const getUserMarks = asyncHandler(async (req, res) => {
  const marks = await Mark.find({ user: req.params.id })

  res.json(marks);
});

/**
 * @route   GET /api/schedule/:id
 * @desc    Get a single schedule by ID
 * @access  Private
 * @returns {Object} - A single schedule
 */
const getMarkById = asyncHandler(async (req, res) => {
  const mark = await Mark.findById(req.params.id)
  if (mark) {
    res.json(mark);
  } else {
    res.status(404);
    throw new Error("Schedule request not found");
  }
});

/**
 * @route   PUT /api/schedule/:id
 * @desc    Update a schedule status (Admin only)
 * @access  Private/Admin
 * @param   {Object} truckId - The id of the truck (required)
 * @param   {String} area - The area of the collection (required)
 * @param   {String} time - the time of schedule (required)
 * @param   {String} date - the date of schedule (required)
 * @returns {Object} - The updated garbage request
 */
const updateMark = asyncHandler(async (req, res) => {
  const { user, marks, type, date} = req.body;

  const mark = await Mark.findById(req.params.id);

  if (mark) {
    mark.user = user || mark.user;
    mark.area = marks || mark.marks;
    mark.time = type || mark.type;
    mark.date = new Date();
    // mark.longitude = longitude || schedule.longitude;
    // mark.latitude = latitude || schedule.latitude;
    // mark.status = status || schedule.status;
    // schedule.collectionDate = collectionDate || new Date(); // Set to current system date if not provided

    const updatedMark = await mark.save();
    res.json(updatedMark);
  } else {
    res.status(404);
    throw new Error("Schedule request not found");
  }
});

/**
 * @route   DELETE /api/schedule/:id
 * @desc    Delete a schedule (Admin only)
 * @access  Private/Admin
 * @returns {Object} - A JSON object confirming deletion
 */
const deleteMark = asyncHandler(async (req, res) => {
  const mark = await Mark.findByIdAndDelete(req.params.id);

  if (mark) {
    res.json({ message: "Schedule removed successfully!" });
  } else {
    res.status(404);
    throw new Error("Schedule not found!");
  }
});

export {
  createMark,
  getAllMarks,
  getUserMarks,
  getMarkById,
  updateMark,
  deleteMark,
};
