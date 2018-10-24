var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/admin/adminUser', require('../controller/adminUser'))
router.get('/',(req,res,next)=>{
  res.send('000')
})
module.exports = router;
