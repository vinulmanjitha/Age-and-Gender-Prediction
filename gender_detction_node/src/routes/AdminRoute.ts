import express from "express";
import { AddUser } from "../controllers";

const router = express.Router();

/*-------------------- Get Counter  ----*/

router.post("/user", AddUser);

export { router as AdminRoute };
