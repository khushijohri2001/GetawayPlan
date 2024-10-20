import jwt from "jsonwebtoken";

export const adminMiddleware = async (req, res, next) => {
  const token = req.cookies.auth_token;
  // console.log(req);
  

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if(req.user.role ==='Admin'){
        next()
      }
      else{
      return res
        .status(401)
        .json({ message: "Unauthorized request. Invalid token" });
      }
  } catch (error) {
    return res.status(401).json({ message: "Server Error" });
  }
};