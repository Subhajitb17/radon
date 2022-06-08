const bookModel= require("../models/bookModel");
const authorModel= require("../models/authorModel");

const createBook= async function (req, res) {
    let data= req.body;
    let savedData= await bookModel.create(data);
    res.send({msg: savedData})
}

const createAuthor = async function (req, res) {
    let data = req.body;
    let savedData= await authorModel.create(data);
    res.send({msg: savedData});
}

const getBooksByChetanBhagat = async function (req, res) {
    let data = await authorModel.find({author_name: "Chetan Bhagat"});
    let id = data[0].author_id;
    let bookData = await bookModel.find({author_id:id})
    res.send({ msg: bookData })
}


const updateBookPrice = async function (req, res) {
    let data = {price: 100};
    let authorsData = await bookModel.findOneAndUpdate(
        {name : "Two States"}, //condition  
        {$set: data}, //update in data
        {new: true, upsert: true}).select
        ({name: 1, _id:0, price: 1, author_id: 1})
    res.send({ msg: authorsData });    
};

const booksCost = async function(req,res){
    const bookData = await bookModel.find({price: {$gte: 50, $lte: 100}}).select({author_id:1, _id:0 })
    const id = bookData.map(inp => inp.author_id)

    let temp = []

    for(let i=0;i<id.length;i++){
        let x = id[i]
        const author = await authorModel.find({ author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    const author_name = temp.flat()
    res.send({msg: author_name})
}

module.exports.createBook= createBook;
module.exports.createAuthor = createAuthor;
module.exports.getBooksByChetanBhagat = getBooksByChetanBhagat;
module.exports.updateBookPrice = updateBookPrice;
module.exports.booksCost = booksCost