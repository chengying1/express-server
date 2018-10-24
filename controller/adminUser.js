const {Router} = require("express");
const router = Router();
const adminUserModel = require('../model/adminUser')
const auth = require('./auth')


router.post('/', auth, async (req, res, next) => {
  try {
    // if(req.session.user){
      const {
        username,
        nickname,
        avatar,
        password,
        desc,
        job,
        phone,
        sex
      } = req.body

      const data = await adminUserModel.create({
        username,
        nickname,
        avatar,
        password,
        desc,
        job,
        phone,
        sex
      })
      res.json({
        code:200,
        msg:'新建管理员成功',
        data
      })
    }
    // else {
    //   res.json({
    //     code:403,
    //     msg:'未登录状态不能发表笔记'
    //   })
    // }
   catch (err) {
    next(err)
  }

})

// 路由 admin/adminUser/login
router.post('/login', async (req, res, next) => {    //登录模块
  try {
    const {username, password} = req.body;
    if(username&&password){
      const user = await adminUserModel.findOne({username})
      if(user){      //有没有这个用户
        if(password == user.password){
          req.session.user == user    //将用户信息存到session
          res.json({
            code: 200,
            msg: '登陆成功',
          })
        }else{
          res.json({
            code: 401,
            msg: '密码错误',
          })
        }
      } else{
        res.json({
          code: 401,
          msg: '该用户不存在',
        })
      }
    }else {
      res.json({
        code: 400,
        msg: '缺少必要参数',
      })
    }
    } catch (err) {
      next(err)
    }

  })






module.exports = router;