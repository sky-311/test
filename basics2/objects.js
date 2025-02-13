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
//console.log(`hello ${this.name}`)//this is used when you want to refrence the same object

}
//console.log(myobject.name)
//console.log(myobject["email"])
myobject.name="vikas"
//Object.freeze(myobject)
myobject.name="tony stark"
//console.log(myobject)


//console.log(myobject.greetings())
//++++++++++++++SINGLETON+++++++++
const tind=new Object()     /* gives same output but it is singleton object */
//console.log(tind);
const tind2={}
//console.log(tind2)
tind.id="124"
tind.name="aakash"
//console.log(tind)
const regular={
    email:"aakash@gmial.com",
    fullname:{
        userfullname:{
            name:"aakash",
            lastname:"polist"
        }
    }
}
// console.log(regular.fullname)
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//to combine two objects
//const obj3=Object.assign({}, obj1, obj2)
//console.log(obj3)
const obj3={...obj1, ...obj2}
// console.log(obj3)
//console.log(Object.keys(tind))

//--------------------DE-STRUCTURING--------------
const course={
    courseName:"javascript",
    price:999,
    instructorName: "aakash"
}
//to acess the instructorName we have to use course.instructureName again again this is not a good way, to avoid this use this syntax
const {instructorName}=course
console.log(instructorName)
const {price}=course
console.log(price)

//*************API (JSON)****************
{
    name="aakash",
    courseName="js",
    price="free"
}
//API are in json format and it can be in object or as an array
