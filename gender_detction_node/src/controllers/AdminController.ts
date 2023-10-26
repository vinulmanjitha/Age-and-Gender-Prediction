import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { User } from "../models";
import { Role } from "../utility/constants";

import { GenerateSignature, ValidatePassword } from "../utility";

export const AddUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { age, gender } = req.body;
  const user = await User.create({
    age,
    gender,
  });

  return res.status(200).json({
    msg: "Success",
  });
};

// check slip
