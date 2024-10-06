import express from "express";
import {
    createMark,
    deleteMark,
    getAllMarks,
    getMarkById,
    getUserMarks,
    updateMark,

} from "../controllers/markConroller.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticate, createMark)
  .get(authenticate, getAllMarks);

router.route("/user-marks/:id").get(getUserMarks);

router
  .route("/:id")
  .get(authenticate, getMarkById)
  .put(authenticate, authorizeAdmin, updateMark)
  .delete(authenticate, authorizeAdmin, deleteMark);

export default router;