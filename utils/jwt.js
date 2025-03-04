const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)
const {uuid} = require('../config/config.default')
module.exports.createToken = async userinfo => {
    return await tojwt(
        { userinfo }, 
        uuid,
        {
            expiresIn: 60 * 60
        })
}

module.exports.verifyToken = async (req, res, next) => {
    var token = req.headers.authorization
    token = token ? token.split('Bearer ')[1] : null
    if (!token) {
        res.status(402).json({ error: "请传入token" })
    }
    try {
        let userinfo = await verify(token,uuid)
        next();
    } catch (error) {
        res.status('402').json({ error: "无效token" })
    }
}