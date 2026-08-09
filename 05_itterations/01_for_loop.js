// FOR LOOP 
for (let i = 0; i < 10; i++) {
    const element = i;

    if (element == 5) {
        console.log("5 is the best number");
    }

    console.log(element);
}

/*
For loop ka use kisi code ko baar baar run karne ke liye hota hai
for loop ke 3 main parts hote hain

let i = 0
Starting value

i < 10
Condition
Jab tak condition true hai loop chalega

i++
Har iteration ke baad i ki value 1 se increase hogi

Flow

Start → Condition check → Code run → i++ → Condition check
*/


// console.log(element);

/*
element ko loop ke andar declare kiya hai
let aur const block scoped hote hain
Isliye element ko loop ke bahar access nahi kar sakte
*/


// Nested For Loop

for (let i = 0; i <= 10; i++) {

    console.log(`outer loop value : ${i}`);

    for (let j = 0; j <= 10; j++) {

        console.log(`inner loop value : ${j} and inner loop ${i}`);

        console.log(i + '*' + j + '=' + i * j);
    }
}

/*
Nested loop ka matlab hai
ek loop ke andar dusra loop

Outer loop ki ek value ke liye
inner loop pura run hota hai

Example

i = 0
j = 0 se 10 tak pura chalega

i = 1
j firse 0 se 10 tak pura chalega

Ye process outer loop ke har value ke liye repeat hota hai
*/


// Array with For Loop

let myArray = ["flash", "superman", "batman"];

console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {

    const element = myArray[index];

    console.log(element);
}

/*
Array ka index 0 se start hota hai

flash → index 0
superman → index 1
batman → index 2

myArray.length total elements batata hai

myArray[index]
current index ka element deta hai

index < myArray.length
loop ko array ke last element tak chalata hai

Isliye array ke saath for loop me
length ka use bahut common hai
*/

// Break

for (let i = 1; i < 20; i++) {

    if (i === 5) {
        console.log("Detected 5");
        break;
    }

    console.log(`Value of i is ${i}`);
}

/*
break ka use loop ko completely stop karne ke liye hota hai

Jab i ki value 5 hogi
break execute hoga

Uske baad loop ki ek bhi iteration nahi chalegi

Output 1 se 4 tak aayega
5 par loop stop ho jayega
*/


// Continue 

for (let i = 1; i <= 20; i++) {

    if (i === 5) {
        console.log("Detected 5");
        continue;
    }

    console.log(`Value of i is ${i}`);
}

/*
continue loop ko stop nahi karta

Ye sirf current iteration ko skip karta hai

Jab i = 5 hoga
continue execute hoga

5 ka neeche wala console.log skip hoga

Fir loop next iteration se continue hoga

Isliye 1 2 3 4 print honge
5 ka normal value print nahi hoga
Fir 6 se 20 tak print hoga
*/