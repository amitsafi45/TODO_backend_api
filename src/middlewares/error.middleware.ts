import env from "../config/env";
import { Request, Response, NextFunction } from "express";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error);

    console.log("Error Handler")

    console.log(error);

    let statusCode = 500;

    let data = {
        success: false,
        message: "serverError",
        data: [],
        ...(env.DEBUG_MODE === "true" && { originalError: error.message })

    }
    if (error.isCustom) {
        statusCode = error.statusCode;
        data = {
            ...data,
            message: error.message
        }
    }

    return res.status(statusCode).json(data);
};

export default errorHandler;

