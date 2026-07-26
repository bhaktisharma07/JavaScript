// Singleton

// Object Literals 

// Creating a Symbol
const mySym = Symbol("key1")

const JsUser = {
    name: "Bhakti",
    "Full Name": "Bhakti Sharma", // Key me space hai, isliye [] se access karte hain
    [mySym]: "mykey1", // Symbol ko object key banane ke liye [] use karte hain
    age: 19,
    location: "Pune",
    email: "bhakt@123.com",
    isLoggedIn: false,
    isLoggedInDay: ["Monday", "Tuesday"]
}

// Accessing Object Values 

// Dot notation
console.log(JsUser.email);

// Bracket notation
console.log(JsUser["email"]);

// Key me space hai, isliye [] use karte hain
console.log(JsUser["Full Name"]);

// Accessing Symbol value
console.log(JsUser[mySym]);


//  Object Values 

// Updating email
JsUser.email = "bhakti@chatgpt.com";

// Freezes the object (No changes allowed after this)
Object.freeze(JsUser);

// This update will NOT work because the object is frozen
JsUser.email = "bhakti@microsoft.com";

console.log(JsUser);


// Adding Functions 
// Adding a function to the object
JsUser.greeting = function () {
    console.log("Hello JS User");
}

// Using 'this' to access object properties
JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}


// Calling Functions 

JsUser.greeting();
JsUser.greetingTwo();


