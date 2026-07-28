// function sayMyName() {
//     console.log("B");
//     console.log("H");
//     console.log("A");
//     console.log("K");
//     console.log("T");
//     console.log("I");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){

//    console.log(number1 + number2);
// }


// function addTwoNumbers(number1, number2){

//    let result = number1 + number2;
//    console.log("bhakti"); // This line will be executed before the return statement
//    return result;
//    console.log("bhakti"); // This line will never be executed because it comes after the return statement

// }

function addTwoNumbers(number1, number2){

//    let result = number1 + number2
//    return result;

    return number1 + number2
}

const result = addTwoNumbers(10, 20) // Output: 30

// console.log(result) // Prints 30

console.log("Result:", result);




function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}


// loginUserMessage("Bhakti") // Nothing will be printed because we are not logging the returned value

console.log(loginUserMessage("Bhakti")); // Bhakti just logged in

console.log(loginUserMessage());




// Rest Operator (...)

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));




const user = {
    username: "Bhakti",
    price: 2000,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    username: "Bhakti",
    price: 100
});




// Passing Array in Function

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));