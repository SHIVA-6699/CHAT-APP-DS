import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId,res) => {
  const token = jwt.sign({userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    secure: process.env.NODE_ENV !=="development"  , // secure cookie only works on https
    sameSite: "none", // CORS
  };
  res.cookie("jwttoken", token, options);
}
export default generateTokenAndSetCookie;