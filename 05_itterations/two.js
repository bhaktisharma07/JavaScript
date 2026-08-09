//  WHILE LOOP 

let index = 0

while (index <= 10) {
    console.log(`value of index is : ${index}`)
    index = index + 2
}

/*
while loop me pehle condition check hoti hai
Agar condition true hai to code execute hota hai
Uske baad index ki value change hoti hai
Yaha index 0 se start ho raha hai
Aur har baar 2 se increase ho raha hai

Output

0
2
4
6
8
10

Jab index 12 hoga
index <= 10 false ho jayega
Aur loop stop ho jayega
*/


// While Loop with Array 

let myArray = ["flash", "superman", "batman"]

let arr = 0

while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`)
    arr = arr + 1
}

/*
Array ka index 0 se start hota hai

arr = 0
myArray[0] → flash

arr = 1
myArray[1] → superman

arr = 2
myArray[2] → batman

arr < myArray.length
condition array ke last element tak loop chalati hai

Har iteration ke baad arr ko increase karna zaroori hai
Warna loop infinite ho sakta hai
*/


// DO WHILE LOOP 

let score = 1

do {
    console.log(`Score is ${score}`)
    score++
} while (score <= 10)

/*
do while loop me pehle code execute hota hai
Uske baad condition check hoti hai

Isliye do while loop kam se kam ek baar zaroor execute hota hai

Flow

Code run → Condition check → Code run → Condition check

Agar condition starting me false bhi ho
Tab bhi do block ek baar execute hoga
*/