// FOREACH

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    console.log(item)
    return item
})

console.log(values)

/*
forEach har element par function run karta hai
forEach koi new array return nahi karta
Isliye values ki value undefined aayegi
*/


// FILTER

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
    return num > 4
})

console.log(newNums)

/*
filter ek new array return karta hai
Jo elements condition ko satisfy karte hain
sirf wahi new array me aate hain
Yaha 4 se bade numbers new array me aayenge
*/


// FILTER WITH FOREACH

const newNumsTwo = []

myNums.forEach((num) => {
    if (num > 4) {
        newNumsTwo.push(num)
    }
})

console.log(newNumsTwo)

/*
forEach khud new array return nahi karta
Isliye ek empty array banaya
Condition true hone par
push() se value new array me add ki
Ye filter ka manual way hai
*/


// FILTER WITH OBJECTS

const books = [
    { title: "book one", genre: "fiction", publish: 1981, edition: 2004 },
    { title: "book two", genre: "fiction", publish: 1922, edition: 2006 },
    { title: "book three", genre: "history", publish: 1995, edition: 2010 },
    { title: "book four", genre: "science", publish: 2001, edition: 2015 },
    { title: "book five", genre: "fiction", publish: 1988, edition: 2003 },
    { title: "book six", genre: "horror", publish: 1975, edition: 2008 },
    { title: "book seven", genre: "history", publish: 2012, edition: 2018 },
    { title: "book eight", genre: "science", publish: 1999, edition: 2007 }
]

const userBooks = books.filter((bk) => {
    return bk.genre === "history"
})

console.log(userBooks)

/*
filter objects ke saath bhi use kar sakte hain
bk current object ko represent karta hai
bk.genre se current book ka genre access kar rahe hain
Sirf history genre wali books new array me aayengi
*/


const userBooksTwo = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === "history"
})

console.log(userBooksTwo)

/*
Yaha do conditions check ho rahi hain
Book ka publish year 2000 ya uske baad hona chahiye
Aur genre history hona chahiye
Dono conditions true hone par hi book new array me aayegi
*/