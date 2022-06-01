const trim = function() {
    const a="   FunctionUp  "
    const forTrim=a.trim();  
    console.log(forTrim)
} 

const changeToUpperCase = function(){
    const b="function up"
    const forUpperCase=b.toUpperCase()
    console.log(forUpperCase)
}

const changeToLowerCase = function(){
    const c="FUNCTION UP"
    const forLowerCse=c.toLowerCase()
    console.log(forLowerCse)
}

    

module.exports.trim = trim
module.exports.changeToUpperCase = changeToUpperCase
module.exports.changeToLowerCase = changeToLowerCase