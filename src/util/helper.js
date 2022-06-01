const myDate = function(){
var today = new Date();

var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
console.log("Today's Date:", date)

}

const myMonth = function(){
    var today = new Date();
        
    var month = today.toLocaleString('default', { month: 'long' })
    console.log("Today's Month:", month)
}


const myBatch = function(){
    console.log("Roadon, W3D3, the topic for today is Nodejs module system")
}


module.exports.myDate= myDate
module.exports.myMonth= myMonth
module.exports.getBatchInfo = myBatch



