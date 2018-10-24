const mongoose = require('mongoose')

const adminUser = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  nickname:String,
  avatar:String,
  password:{
    type:String,
    required:true
  },
  desc:String,
  job:Number,
  phone:String,
  sex:Number
},{versionKey:false, timestamps:{createdAt: 'createTime',updatedAt: 'updateTime'}})

module.exports = mongoose.model("admin_user",adminUser)