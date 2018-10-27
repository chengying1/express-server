const mongoose = require('mongoose')

const swiper = new mongoose.Schema({

  title:String,
  img:String,
  newsId:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'news'
  },
  status:String,
  sort:String,
},{versionKey:false, timestamps:{createdAt: 'createTime',updatedAt: 'updateTime'}})

module.exports = mongoose.model("swiper",swiper)