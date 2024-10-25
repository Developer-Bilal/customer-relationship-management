import { Router } from "express";

const UserRouter = Router();

UserRouter.get("/", () => {});

UserRouter.post("/create", () => {});

UserRouter.put("/update/:id", () => {});

UserRouter.delete("/delete/:id", () => {});

export default UserRouter;
