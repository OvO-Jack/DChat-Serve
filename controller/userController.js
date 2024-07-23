const {User} = require('../model/index')
const {createToken} = require('../utils/jwt')
exports.register = async(req,res)=>{
    console.log(req.body)
    const userModel = new User(req.body);
    const dbBACK = await userModel.save();
    user = dbBACK.toJSON()
    delete user.password
    res.status(201).json({user})
}
exports.login = async(req,res)=>{
    //客户端数据验证
    //链接数据库进行查询
    var dbBack = await User.findOne(req.body);
    if(!dbBack){
        res.status(402).json({error:"邮箱或密码不正确"})
    }
    dbBack = dbBack.toJSON();
    dbBack.token =await createToken(dbBack)
    res.status(200).json(dbBack)
}