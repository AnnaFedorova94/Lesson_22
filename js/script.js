"use strict"

let userAn = `Я вчу JS`;

//Вариант 1
console.log(`Я вчу JS`);

//Вариант 2
console.log(`JS`)
console.log(`вчу`)

//Вариант 3  
// помилка, не можна в один рядок
console.log(`вчу`) 

console.log(`JS`)

//Вариант 4
// помилка, нема закривающих кавичок 
console.log(`Я вчу`);
console.log(`JS`);

// ================================================================

const NAME_EYES = "green"
let user = "";
let userName = "Вася" 
user = userName;
console.log(user);
// Вариант 1 - неправльний(переменние должни розделятся комой)

// =================================================================

// Вариант 1 - неправильние кавычки 
let userAge = 36;
let userInfo = `Фрилансер ${userAge}`;
console.log(userInfo);

// Вариант 2 - неправильно, вернеться значение infinity
let userHeight = 145 / 0;
console.log(userHeight);

// Вариант 3 - неправильно, вернеться тип даних undefined
let userName2;
console.log(typeof userName2);

// Вариант 4 -правильно
let userSize = "45" / "8";
console.log(typeof userSize);