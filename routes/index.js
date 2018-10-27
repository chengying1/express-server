var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/admin/news', require('../controller/news'))
router.use('/admin/swiper', require('../controller/swiper'))
router.use('/admin/adminUser', require('../controller/adminUser'))
router.get('/',(req,res,next)=>{
  res.send('000')
})
module.exports = router;
