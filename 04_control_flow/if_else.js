//  IF ELSE 

const isUserLoggedIn = true;
const temperature = 41;

if (temperature === 50) {
    console.log("Temperature is 50");
} else {
    console.log("Temperature is not 50");
}

console.log("Execute");

/*
if condition true hogi to if block chalega
Agar false hui to else block execute hoga
=== value aur data type dono compare karta hai
*/


// Comparison Operators
// <, >, <=, >=, ==, ===, !=, !==

const score = 200;

if (score > 100) {
    var power = "fly";
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);

/*
score 100 se bada hai isliye if block execute hoga

Yaha var use kiya hai
var block scope follow nahi karta
Isliye if block ke bahar bhi power access ho raha hai

Agar let ya const hota to bahar error aata
*/


const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");

if (balance < 500) {
    console.log("less than 500");

} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 900");

} else if (balance < 1200) {
    console.log("less than 1200");

} else {
    console.log("greater than 1200");
}

/*
else if tab use karte hain jab multiple conditions check karni ho

JS upar se niche conditions check karta hai
Jaisi hi ek condition true milti hai
uske baad niche wali conditions check nahi hoti
*/


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

/*
&& (AND)

Sabhi conditions true honi chahiye
Ek bhi false hui to pura condition false ho jayega

Yaha 2 == 3 false hai
isliye kuch bhi print nahi hoga
*/


if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in from Google or Email");
}

/*
|| (OR)

Agar ek bhi condition true ho
to pura condition true ho jata hai

Yaha Email true hai
isliye message print hoga
*/