const arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num)                    //iteration in array 
}

//we can also iterate in string

const str="hello world"
for (const greet of str) {
   // console.log(`this is char of string str ${greet}`)   
}

//maps
const map = new Map()
map.set("IND","INDIA")
map.set("USE","UNITED STATES OF AMERICA")
map.set("FR","FRANCE")
//console.log(map)

//map did not give duplicate values
//we can apply for of loop on map also
for (const [key, value] of map) {
   // console.log(key ,"-", value )
    
}

//for of loop is not usefull in case of objects for iteration
//FOR IN LOOP IS USED FOR ITERATION IN CASE OF OBJECTS
 const myObject={
    js:"javascript",
    cpp:"c++",
    swift:"swift by apple"
 }

 for (const key in myObject) {
  //console.log(key, myObject[key])
 }

//for each loop using foreach
const coding =["java","c++","python"]
coding.forEach(function(item){       //inside for each loop this function is call back function ,so it does not has name
   // console.log(item)
})

//to access or iterate in object in array

const myCode=[
{
    languageName:"java",
    fileName:"java"
}
,
{
    languageName:"python",
    fileName:"py"
}
]
myCode.forEach((item)=>{
    console.log(item.languageName)
})
