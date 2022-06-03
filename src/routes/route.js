const express = require('express');
const underscore = require('underscore');
const lodash = require('lodash');


const router = express.Router();


//pritesh Sir assignment
//Question: 1
router.get("/missingNumber1", function (req, res) {
    let arr1 = [1, 2, 3, 5, 6, 7]
    let missingNumber1;
    for (let i = 0; i < arr1.length - 1; i++) {
      if (arr1[i] + 1 != arr1[i + 1]) {
        missingNumber1 = arr1[i] + 1
      }
  
    }
    res.send({ Data: "Missing number is: " + missingNumber1 })
  })
  
  //Question: 2
  router.get("/missingNumber2", function (req, res) {
    let arr2 = [33, 34, 35, 37, 38]
    let missingNumber2;
    for (let i = 0; i < arr2.length - 1; i++) {
      if (arr2[i] + 1 != arr2[i + 1]) {
        missingNumber2 = arr2[i] + 1
      }
  
    }
    res.send({ Data: "Missing number is: " + missingNumber2 })
  })


//Assignment: 2----- Sabiha Ma'am Assignment
//Question: 1
const moviesName = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

router.get('/movies', function (req, res) {

  res.send({ Movies: moviesName })
});

//Question: 2 & 3
router.get('/movies/:indexNumber', function (req, res) {
  let x = req.params.indexNumber;
  if (x > moviesName.length) {
    res.send("Use a Valid Index")
  }
  else {
    res.send({ moviesName: "The movie is " + moviesName[x] })
  }
})

//Question: 4
const arrMovie = [{
  "id": 1,
  "name": "The Shining"
}, {
  "id": 2,
  "name": "Incendies"
}, {
  "id": 3,
  "name": "Rang de Basanti"
}, {
  "id": 4,
  "name": "Finding Nemo"
}]

router.get('/flims', function (req, res) {
  res.send({ Flims: arrMovie })
})

//Question: 5
router.get('/flims/:filmId', function (req, res) {
  let x = req.params.filmId


  if (x > arrMovie.length) {
    res.send("No movie exists with this id")
  }
  else {
    let y = JSON.stringify(arrMovie[x])
    let z = y.replace(/\\/g, 'br');
    res.send(z)
  }
})


module.exports = router;
// adding this comment for no reason