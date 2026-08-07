const userEmail = []

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Dont have user email")
}

/*
Empty array [] is truthy

Isliye if condition true hogi

Output
Got user email
*/


//  Falsy Values 

// false
// 0
// -0
// BigInt(0)
// ""
// null
// undefined
// NaN

/*
Ye sab falsy values hain

Inko if condition me use karoge to condition false hogi
*/


//  Truthy Values 

// "0"
// "false"
// " "
// []
// {}
// function(){}

/*
Ye sab truthy values hain

Inko if condition me use karoge to condition true hogi
*/


if (userEmail.length === 0) {
    console.log("Array is empty")
}

/*
Array empty hai ya nahi

Ye check karne ke liye length use karte hain
*/


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

/*
Object.keys object ki saari keys ko array me convert karta hai

Agar length 0 hai to object empty hai
*/


// Nullish Coalescing Operator 

// ?? works only with null and undefined

let val1

val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

/*
?? first valid value return karta hai

5 ?? 10          Output 5

null ?? 10       Output 10

undefined ?? 15  Output 15

null ?? 10 ?? 20 Output 10
*/


// Ternary Operator 

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80
    ? console.log("More than or equal to 80")
    : console.log("Less than 80")

/*
Ternary operator if else ka short form hai

condition ? true : false
*/