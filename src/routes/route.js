const express = require('express');

const router = express.Router();

const myLogger = require('../logger/logger')
const myHelper = require('../util/helper')
const forMatter = require('../validator/formatter')

router.get('/test-me', function (req, res) {

    // Problem- 1
    myLogger.welcome()

    //Problem-2
    myHelper.myDate()
    myHelper.myMonth()
    myHelper.getBatchInfo()
    res.send('My first ever api!')

    //Problem-3
    forMatter.trim()
    forMatter.changeToUpperCase()
    forMatter.changetoLowerCase()
});

module.exports = router;
// adding this comment for no reason