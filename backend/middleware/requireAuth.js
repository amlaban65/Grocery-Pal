const jwt = require('jsonwebtoken');
const User = require('../models/User.js')
const requireAuth = async (req, res, next) => {
    //verify auth
    const {authorization} = req.headers;
    if (!authorization) return res.status(401).json({
        error: "You are not logged in"});
    const token = authorization.split(' ')[1];
    try {
        const {id} = jwt.verify(token, process.env.SECRET);
        req.user = await User.findOne({id}).select('_id')
        next();
    } catch (error) {
        res.status(401).json({
            error: "You are not logged in"});
    }
}
module.exports=requireAuth;