function sayMyName(){
    console.log("aakash")
}
sayMyName()// to call this function anywhere just type function name and () these bracket tell to execute the function
//for example
function add(num1, num2){
   // console.log(num1+num2)
}
// add(456,1298)
//const result=add(1234,234)
//console.log(result)


function add1(num1, num2){
    let result=num1+num2
    return result
}
const result= add1(23,34)
//console.log(result) // return keyword retun the value 

function userLogedIn(username){
    return `${username} just logedin` 
}
//console.log(userLogedIn("aakash"))

//+++++++++++++REST OPERATOR++++++++++
function addCartPrice(num){
return num
}
console.log(addCartPrice(200)) //but to add multiple values to the cart we can use rest operator(...)
function addCartPrice1(...num){
    return num
    }
    console.log(addCartPrice1(200,300,4000,500)) //this rest op. gives the array of the number 
