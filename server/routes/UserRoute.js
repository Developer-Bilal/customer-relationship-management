import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  signInUser,
  signUpUser,
  updateUser,
} from "../controllers/UserController.js";

import { auth } from "../middlewares/auth.js";

const UserRouter = Router();

UserRouter.get("/", getUsers);

UserRouter.get("/:id", getUser);

UserRouter.post("/create", createUser);

UserRouter.post("/signup", signUpUser);

UserRouter.post("/signin", signInUser);

UserRouter.put("/update/:id", updateUser);

UserRouter.delete("/delete/:id", deleteUser);

export default UserRouter;
