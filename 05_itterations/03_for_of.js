// FOR OF

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)
}

/*
for of array ki values ko directly access karta hai
num me array ki current value aati hai
Index manually manage karne ki zarurat nahi hoti
*/


const greetings = "Hello, world!"

for (const greet of greetings) {
    console.log(`each character is ${greet}`)
}

/*
String bhi iterable hoti hai
for of string ke har character ko ek ek karke access karta hai
greet me har baar ek character aayega
*/


// MAPS

const map = new Map()

map.set("IN", "India")
map.set("US", "United States of America")
map.set("FR", "France")
map.set("IN", "India")

console.log(map)

for (const [key, value] of map) {
    console.log(key, ":-", value)
}

/*
Map key value pairs store karta hai
Har key unique hoti hai
IN ko dobara set karne par duplicate entry nahi banegi
[key, value] destructuring ka use karke
key aur value ko alag variables me le rahe hain
Map ko for of se directly iterate kar sakte hain
*/


// OBJECT

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ":-", value)
}

/*
Object ko directly for of se iterate nahi kar sakte
Object.entries() object ko key value pairs ke array me convert karta hai
Uske baad for of se un pairs ko access kar sakte hain
key me game1 ya game2 aayega
value me NFS ya Spiderman aayega
*/