
const {Router} = require("express");
const router = Router();
const swiperModel = require('../model/swiper')
const auth = require('./auth')


router.post('/', auth, async (req, res, next) => {
  try {
    const {
      title,
      img,
      newsId,
      status,
      sort,
    } = req.body

    const data = await swiperModel.create({
      title,
      img,
      newsId,
      status,
      sort,
    })
    res.json({
      code:200,
      msg:'新建轮播图成功',
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

    const dataList = await swiperModel
        .find()
        .skip((page-1)*page_size)
        .limit(page_size)
        .sort({_id: -1})
        .populate({
          path:'newsId',
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

    const dataList = await swiperModel
        .findById(id)
        // .skip((page-1)*page_size)
        // .limit(page_size)
        // .sort({_id: -1})
        // .populate({
        //   path:'newsId',
        // })
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
router.patch('/:id',  async (req, res, next) => {
  try {
    const {id} = req.params
    const {
      title,
      img,
      newsId,
      status,
      sort,
    } = req.body

    const data = await swiperModel.findById(id)
    const updateData = await data.update({$set:{title,
        img,
        newsId,
        status,
        sort,}})
    res.json({
      code:200,
      msg:'修改轮播图成功',
      data:updateData
    })
  }
  catch (err) {
    next(err)
  }

})



module.exports = router;