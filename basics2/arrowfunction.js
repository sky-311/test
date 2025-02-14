const user={
    userName:"aakash",
    price: 0,
    welcomeMessage: function(){
        const naam="ashu"
       // console.log(`${this.userName},welcome to the application`)
        console.log(this.naam)
    }

}


user.welcomeMessage()
// user.userName="vikas"

//  user.welcomeMessage()
//  console.log(this)
//  // this keyword tells about the curent context of the code
//function chai(){
  //  let username="aakash"
    //console.log(this.username)
//}
//chai()

//-----------------Arrow function------------
const chai = ()=>{
    const aaa="aakash"
    console.log(this.aaa)
}
chai()

// const add=(n1,n2)=>{
//     return(n1+n2)
// }
// console.log(add(1,3))

const addTwo= (num1, num2) => num1 + num2
console.log(addTwo(3,5))
