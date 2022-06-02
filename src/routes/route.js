const express = require('express');
const underscore = require('underscore');
const lodash = require('lodash');
const _ = require("lodash")


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

    //Problem-3
    forMatter.trim()
    forMatter.changeToUpperCase()
    forMatter.changeToLowerCase()

    let firstElement = underscore.first(["subhajit", "souhardya", "reet"])
    console.log("The first element received from underscore function is " + firstElement)

    res.send('My first ever api!')
});


//Problem-4
router.get('/hello', function (req, res) {

    //Chunk
    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const chunkList = console.log(_.chunk(monthsList, 3));

    //Tail
    const oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const byTail = console.log(_.tail(oddNumber));

    //Union
    const arr1 = [1, 2, 3, 4]
    const arr2 = [3, 4, 5, 6]
    const arr3 = [5, 5, 6, 7, 8]
    const arr4 = [1, 2, 8, 7, 3]
    const arr5 = [9, 11, 4]

    const byUnion = _.union(arr1, arr2, arr3, arr4, arr5);
    console.log(byUnion)


    //forParis
    const moviesPairObject = lodash.fromPairs([["Horror", "The Shining"], ["Drama", "Titanic"], ["Thriller", "Shutter Island"], ["Fantasy", "Pans Labyrinth"]])
    console.log(moviesPairObject);




    res.send('My Hello api!')
});


module.exports = router;
// adding this comment for no reason