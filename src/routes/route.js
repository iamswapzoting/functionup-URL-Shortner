const express = require('express');
const {shortUrl,urlCode}=require('../controller/urlController')
const router = express.Router();

router.post("/url/shorten",shortUrl)

router.get("/:urlCode",urlCode)



module.exports=router