// var c = 30 // var is function scoped, avoid using it

let a = 300 // Outer variable

if (true) {
    let a = 10 // Block scope
    const b = 20

    console.log("INNER :", a); // 10
}

console.log(a); // 300

// console.log(b); // Error
// console.log(c);

/*
let and const are block scoped.
Variables inside {} cannot be accessed outside.
Inner variable can have the same name as outer variable (Shadowing).
*/

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username); // Inner function can access outer variables
    }

    // console.log(website); // Error
    two()
}

one()

/*
Child function can access parent's variables.
Parent function cannot access child's variables.
*/

if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = "youtube"
        console.log(username + website);
    }

    // console.log(website); // Error
}

// console.log(username); // Error



// ************** Hoisting **************

// Function declaration is hoisted
console.log(addOne(5));

function addOne(num) {
    return num + 1;
}

// Function expression is NOT hoisted
const addTwo = function(num) {
    return num + 2;
};

console.log(addTwo(5));

/*
Function Declaration:
- Can be called before its definition.

Function Expression:
- Cannot be called before its definition.
- Calling it before declaration gives ReferenceError.
*/