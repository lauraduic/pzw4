// IF naredba

let age = 18;
let text = "you can not drive";

if (age >= 18){
    text = "you can drive"
} 

console.log(text);

// IF else naredba

const hour = new Date().getHours();
let greeting;

if (hour < 18){
    greeting = "good day";
}

else{
    greeting = "good evening";
}

console.log(greeting);

// IF else if naredba

const time = new Date().getHours();
let greeting2;

if (time < 10){
    greeting2 = "good morning";
}
else if (time < 20){
    greeting2 = "good day";
}

else{
    greeting2 = "good evening";
}

console.log(greeting2);