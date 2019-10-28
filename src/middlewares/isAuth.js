import jwt from "jsonwebtoken"
import { auth } from "googleapis/build/src/apis/drive";

export default (req, res, next) => {
    const header = req.get("Authorization");
    if (!header) {
        req.isAuth = false;
        return next();
    }

    const token = header.split(' ')[1];
    if (!token || token === '') {
        req.isAuth = false;
        return next;
    }

    let decodedToken;
    try {
        decodedToken = jwt.verify(token, `${process.env.SECRET_JWT_KEY}`); 
    } catch (err) {
        req.isAuth = false;
        return next();
    }
    if(!decodedToken) {
        req.isAuth= false;
        return next(); 
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
}