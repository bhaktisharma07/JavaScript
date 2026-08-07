//  SWITCH 

/*
switch syntax

switch (key) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
        break;
}
*/

/*
Switch me ek value ko multiple cases ke sath compare kiya jata hai

key = jis value ko check karna hai
case = jis value se compare karna hai
break = match hone ke baad switch se bahar nikal deta hai
default = agar koi bhi case match na ho to default execute hota hai
*/


const month = "march";

switch (month) {

    case "jan":
        console.log("January");
        break;

    case "feb":
        console.log("February");
        break;

    case "march":
        console.log("March");
        break;

    case "apr":
        console.log("April");
        break;

    default:
        console.log("Default case matched");
        break;
}


/*
month = "march" hai

JS sabse pehle "jan" check karega
Fir "feb"
Fir "march" match ho jayega

Output:
March

break milte hi switch wahi ruk jayega
Niche wale cases execute nahi honge
*/


/*
Agar break hata diya to kya hoga?

Jis case se match hoga,
uske baad ke saare cases bhi execute ho jayenge
jab tak break ya switch khatam na ho

Isko Fall Through bolte hain
*/