// REDUCE

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)

console.log(myTotal)

/*
reduce multiple values ko combine karke
ek single final value return karta hai

acc accumulator hota hai
Ye result ko store karta rehta hai

currval current value hoti hai

0 initial value hai
Isliye calculation 0 se start hoti hai

Flow

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
*/


const myTotalTwo = myNums.reduce(
    (acc, curr) => acc + curr,
    0
)

console.log(myTotalTwo)

/*
reduce ko arrow function ke saath bhi use kar sakte hain

Yaha same calculation short syntax me likhi hai

Result 6 aayega
*/


// REDUCE WITH OBJECTS

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data course",
        price: 2999
    }
]

const priceToPay = shoppingCart.reduce(
    (acc, item) => acc + item.price,
    0
)

console.log(priceToPay)

/*
Array ke andar objects hain

item current object ko represent karta hai

item.price se current item ki price milti hai

Har price accumulator me add hoti rahegi

Final result total shopping cart price hoga

2999 + 999 + 5999 + 2999 = 12996
*/