//  Objects Part 2 

// Creating an empty object
// const tinderUser = new Object() // Singleton object

const tinderUser = {} // Non-singleton object

// Adding values to the object
tinderUser.id = "123abc"
tinderUser.name = "Bhakti"
tinderUser.isLoggedIn = false

console.log(tinderUser)


// Nested Objects

const regularUser = {
    email: "bhakti@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Bhakti",
            lastname: "Sharma"
        }
    }
}

// Accessing nested object values
console.log(regularUser.fullname.userfullname.firstname)


// Merging Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // Not recommended

// Merging objects using Object.assign()
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// Merging objects using Spread Operator (...)
const obj3 = { ...obj1, ...obj2, ...obj4 }

// console.log(obj3)


// Array of Objects 

const users = [
    {
        id: 1,
        email: "bhakti@gmail.com"
    }
]

// Accessing object inside an array
console.log(users[0].email)


//  Object Methods 

console.log(tinderUser)

// Returns all keys as an array
console.log(Object.keys(tinderUser))

// Returns all values as an array
console.log(Object.values(tinderUser))

// Returns key-value pairs as arrays
console.log(Object.entries(tinderUser))

// Checks whether the property exists or not
console.log(tinderUser.hasOwnProperty("isLoggedIn"))


/*
- Objects store data in key-value pairs.
- Objects can contain nested objects.
- Spread operator (...) is used to merge objects.
- Arrays can store objects.
- Object.keys() returns all keys.
- Object.values() returns all values.
- Object.entries() returns key-value pairs.
- hasOwnProperty() checks whether a property exists.
*/


const course = {
    coursename: "JavaScript",
    price: 299,
    courseInstructor: "Bhakti Sharma"
}

const { courseInstructor : Instructor } = course

// console.log(courseInstructor);
console.log(Instructor);

// {
//     "name": "Bhakti",
//     "courcename": "JavaScript",
//     "price": 299,
// }

[
    {},
    {},
    {}
]