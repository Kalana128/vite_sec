import API from "../helper/apiHelper";

const createMark = async (mark) => {
  try {
    const createdMark = await new API().post("marks", mark);
    return createdMark;
  } catch (error) {
    console.error("Error creating Mark:", error.message);
    throw error; // Rethrow the error for the component to handle
  }
}; // Create a new Schedule

const getUserMarks = async (id) => {
  // Get all trucks
  try {
    const marks = await new API().get(`marks/user-marks/${id}`, {});
    return marks;
  } catch (error) {
    console.error("Error fetching marks:", error.message);
    throw error; // Rethrow the error for the component to handle
  }
}; // Get all Schedule

const getAllMarks = async () => {
  // Get all trucks
  try {
    const marks = await new API().get("marks", {});
    return marks;
  } catch (error) {
    console.error("Error fetching marks:", error.message);
    throw error; // Rethrow the error for the component to handle
  }
}; // Get all Schedule

// const updateSchedule = async (data, id) => {
//   try {
//     const updatedSchedule = await new API().put(`schedule/${id}`, data); // Sending 'data' directly
//     console.log(updatedSchedule);
//     return updatedSchedule;
//   } catch (error) {
//     console.error("Error updating Schedule:", error.message);
//     throw error;
//   }
// }; // Update a Schedule

// const deleteSchedule = async (id) => {
//   // Delete a truck
//   try {
//     const deletedSchedule = await new API().delete(`schedule/${id}`);
//     // console.log("deletedSchedule => ", deletedSchedule);
//     return deletedSchedule.data;
//   } catch (error) {
//     console.error("Error deleting Schedule:", error.message);
//     throw error; // Rethrow the error for the component to handle
//   }
// }; // Delete a Schedule

export { createMark, getAllMarks, getUserMarks};
// Export the functions for use in the frontend
