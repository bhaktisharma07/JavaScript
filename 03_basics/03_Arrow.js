const user = {
    username: "bhakti",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }

}

user.welcomeMessage();

user.username = "sam"; // Updating object value
user.welcomeMessage();

console.log(this); // In Node.js, 'this' refers to an empty object {}


/*
- this refers to the current object.
- It works inside object methods.
*/

function chai() {
    let username = "bhakti";
    console.log(this.username); // undefined
}

chai();

/*
In a normal function, 'this' does not refer to local variables.
*/




// Function Expression

// const chaiExpression = function () {
//     let username = "bhakti";
//     console.log(this.username);
// }

// chaiExpression();




// Arrow Function

const chaiArrow = () => {
    let username = "bhakti";
    console.log(this); // Arrow functions do not have their own 'this'
}

// chaiArrow();




// Arrow Function Syntax

const addTwo = (num1, num2) => {
    return num1 + num2;
}

// Implicit Return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// Returning an object requires ()
const addTwoObject = () => ({ username: "bhakti" })

console.log(addTwo(3, 4));

console.log(addTwoObject());




// forEach with Arrow Function

const myArray = [2, 3, 4, 5, 6];

myArray.forEach(() => {

});



/*
- this works inside object methods.
- this does not work as expected inside normal functions.
- Arrow functions do not have their own this.
- Explicit Return => use return keyword.
- Implicit Return => no return keyword needed.
- Wrap object in () while returning an object from an arrow function.
*/