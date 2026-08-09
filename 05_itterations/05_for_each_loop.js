// FOR EACH

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val) {
//     console.log(val)
// })

/*
forEach array ke har element par ek baar function run karta hai
val me current element ki value aati hai
Array ke elements ko one by one access karne ke liye forEach ka use hota hai
*/


coding.forEach((item) => {
    console.log(item)
})

/*
Arrow function ko forEach ke andar directly pass kar sakte hain
item me current array element aata hai
*/


function printMe(item) {
    console.log(item)
}

coding.forEach(printMe)

/*
Existing function ko bhi forEach me pass kar sakte hain
Yaha function ko call nahi karna hai

printMe
sahi hai

printMe()
galat hai

forEach khud function ko har element ke liye call karega
*/


coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

/*
forEach callback ko mainly 3 values mil sakti hain

item → current element
index → current element ka index
arr → complete array
*/


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})

/*
Array ke andar objects bhi ho sakte hain
item me current object aayega
item.languageName se object ki languageName property access kar sakte hain
*/