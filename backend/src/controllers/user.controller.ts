import asynHandler from "../utils/asynHandler";
import User from "../models/user.model";
import { Request, Response } from "express";
import {statusCodes} from "../utils/constants"
import { ApiResponse } from "../utils/ApiResponse";

const createUser = asynHandler(async(req: Request, res: Response)=>{
    
    const {email, auth0Id} = req.body
    const userExists = await User.findOne({$or: [{email:email}, {auth0Id:auth0Id}]})
    if (userExists){
        res
        .status(statusCodes.OK)
        .json(new ApiResponse(statusCodes.OK, {}, "user already exists"))
        return
    }
    const newUser = await User.create(req.body)
    res
    .status(statusCodes.CREATED)
    .json(new ApiResponse(
        statusCodes.CREATED,
        newUser.toObject(),
        "user is created successfully"
    ))
})

export {
    createUser
}