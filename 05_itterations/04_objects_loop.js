// FOR IN

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

/*
for in object ke keys ko access karta hai
key me object ki property ka naam aata hai
myObject[key] se us key ki value milti hai

Example

key → js
myObject[key] → JavaScript
*/


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key])
}

/*
Array ke saath for in index return karta hai
key ki value 0 1 2 3 4 hogi
programming[key] se actual array value milti hai
for in mainly objects ke liye useful hai
*/


const map = new Map()

map.set("IN", "India")
map.set("US", "United States of America")
map.set("FR", "France")
map.set("IN", "India")

for (const key in map) {
    console.log(key)
}

/*
Map ke saath for in use nahi hota

Map iterable hai
Isliye Map ke liye for of use karte hain

for in → object ke keys
for of → iterable ki values
*/