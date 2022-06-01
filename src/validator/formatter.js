const trim = function() {
    const a=" functionup"
    const forTrim=a.trim();  
    console.log(forTrim)
} 

const changetoLowerCase = function(){
    const b="function up"
    const forUpperCase=b.toUpperCase()
    console.log(forUpperCase)
}

const changeToUpperCase = function(){
    const c="FUNCTION UP"
    const forLowerCse=c.toLowerCase()
    console.log(forLowerCse)
}

    

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase