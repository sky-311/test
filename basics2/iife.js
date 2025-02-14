//immediately invoked function expression (iife)

(function chai()
{
    console.log("db connected")

})();//iife to avoid global pollution and incvoked the function imme.
( (name) => {
    console.log(`hello  ${name}`)
}

)("aakash")