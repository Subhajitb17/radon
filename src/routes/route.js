const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const bookController= require("../controllers/bookController");

router.post("/createBook", bookController.createBook);

router.post("/createAuthor", bookController.createAuthor);

router.get("/getBooksByChetanBhagat", bookController.getBooksByChetanBhagat);

router.get("/updateBookPrice", bookController.updateBookPrice);

router.get("/booksCost", bookController.booksCost);


//optional assignments
router.get("/books_by_authorid/:id",bookController.books_by_authorid);

router.get("/getNameAge",bookController.getNameAge);

module.exports = router;