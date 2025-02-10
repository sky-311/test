//array
const myarr= [1,2,3,4,5]
//console.log(myarr[0])
const heros=["hulk", "iron_man", "black_widow"]
// console.log(heros[2])
const arr2= new Array(1,2,3,4,5)
myarr.push(6)
//console.log(myarr)
//myarr.pop() //it removes the last element from the array
//console.log(myarr)
// shift and unshift method to add or remove 1st element
//myarr.unshift(2)
myarr.shift()
//console.log(myarr)
//includes() to find weather the element is in array or not
//console.log(myarr.includes(2))
// merging two arrays
const marvel=["thor", "spiderman", "ironman"]
const dc=["superman", "batman", "wonderwoman"]
//marvel.push(dc)
//console.log(marvel)
const newarr=marvel.concat(dc)
//console.log(newarr)

const aarr=[1, 3, 4, [5,6],7,[8,8,[6,7]],8]
const real_aarr=aarr.flat(1)
//console.log(real_aarr)
console.log(Array.isArray("aakash"))
console.log(Array.from("aakash"))