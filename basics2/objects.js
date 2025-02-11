//singleton
//object can be defined by LITERLS and constructors
//let's use literls
const mysym=Symbol("key1")
const myobject={
//to declare symbol 
[mysym]:"mykey",
name:"aakash",  //these are called key value pairs .we can access by key 
age:18,
email:"aakash@gmail.com",

}
myobject.greetings=function()
{
console.log(`hello ${this.name}`)//this is used when you want to refrence the same object

}
console.log(myobject.name)
console.log(myobject["email"])
myobject.name="vikas"
//Object.freeze(myobject)
myobject.name="tony stark"
console.log(myobject)


console.log(myobject.greetings())