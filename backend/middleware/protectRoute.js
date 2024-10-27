import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const protectRoute = async (req, res, next) => {
    try{
        const token=req.cookies.jwttoken;
        if(!token){
            res.status(401).json({message:"Not authorized, no token"})
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            res.status(401).json({message:"Not authorized, token verification failed"})
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            res.status(404).json({message:"User not found"})
        }
        req.user=user;
        next();
    }
    catch(error){
        res.status(401).json({message:"Not authorized, token failed"})
        console.log(error.message)
    }
}

export default protectRoute;