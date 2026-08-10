// MAP

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map((num) => {
    return num + 10
})

console.log(newNums)

/*
map har element par operation perform karta hai
map ek new array return karta hai
Original array change nahi hota
Yaha har number me 10 add ho raha hai
*/


// CHAINING

const newNumsTwo = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNumsTwo)

/*
Yaha multiple methods ko chain kiya gaya hai

Pehla map
Har number ko 10 se multiply karta hai

Dusra map
Pehle map se mile result me 1 add karta hai

Filter
Sirf 40 ya usse bade numbers ko rakhta hai

Har method ka result next method ko milta hai
*/