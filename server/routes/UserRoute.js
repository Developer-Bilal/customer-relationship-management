import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/UserController.js";

const UserRouter = Router();

UserRouter.get("/", getUsers);

UserRouter.get("/:id", getUser);

UserRouter.post("/create", createUser);

UserRouter.put("/update/:id", updateUser);

UserRouter.delete("/delete/:id", deleteUser);

export default UserRouter;
