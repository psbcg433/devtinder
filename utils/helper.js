
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const isEmail = (email) => {
    return validator.isEmail(email);
};

export const isStrongPassword = (password) => {
    return validator.isStrongPassword(password);
};

export const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId)=>
{
    return jwt.sign({id:userId},process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    })
}   


export const verifyToken = (token)=>
{
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error("Invalid token");
    }
}