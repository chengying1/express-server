
const {Router} = require("express");
const router = Router();
const newsModel = require('../model/news')
const auth = require('./auth')


router.post('/', auth, async (req, res, next) => {
  try {
    const {
      title,
      content,
      contentText,
      img,
      author,
      look_num
    } = req.body

    const data = await newsModel.create({
      title,
      content,
      contentText,
      img,
      author,
      look_num
    })
    res.json({
      code:200,
      msg:'新建新闻成功',
      data
    })
  }
  catch (err) {
    next(err)
  }

})

router.get('/', async (req, res, next) => {
  try {
    let {page=1, page_size=10} = req.query
    page = parseInt(page)
    page_size = parseInt(page_size)

    const dataList = await newsModel
        .find()
        .skip((page-1)*page_size)
        .limit(page_size)
        .sort({_id: -1})
        .populate({
          path:'author',
          select:'-password'
        })
        // .populate({
        //   path:'type'
        // })
    // console.log(dataList)
    res.json({
      code: 200,
      data: dataList,
      msg: 'success',

    })
  }catch(err){
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params

    const dataList = await newsModel
        .findById(id)
        .populate({
          path:'author',
          select:'-password'
        })
        // .populate({
        //   path:'category'
        // })
    // console.log(dataList)
    res.json({
      code: 200,
      data: dataList,
      msg: 'success',

    })
  }catch(err){
    next(err)
  }
})



module.exports = router;