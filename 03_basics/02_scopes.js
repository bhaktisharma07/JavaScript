// var c = 30 // var has global/function scope, avoid using it

let a = 300 // Outer (global) variable

if (true) {
    let a = 10 // This 'a' exists only inside this block
    const b = 20 // const is also block scoped

    console.log("INNER :", a); // Output: 10
}

console.log(a); // Output: 300 (Outer 'a' is not affected)

// console.log(b); // Error: 'b' is not accessible outside the block

// console.log(c); // If var was used, it would be accessible here because var is not block scoped