const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const UserController= require("../controllers/bookController")



router.post("/createBookList", UserController.createBookList  )

router.get("/getBooksData", UserController.getBookList)

module.exports = router;