// // cinst pada array & objek

// const numbers =  [1, 2, 3, 4, 5,];
// numbers =[3] = 10;
// console.log(numbers);

// const john =

// string literal 

// const john  = {
//     firstName: "john"
//     lastName : "doe"
//     age: 33,
//     status: "active"
// };
//     const kalimat = "halo nama saya" + john. firstName + "" + john.lastName + ", umur saya " + john.age + "yahuns dan statsu saya" + john.status;

    //arrow function

// function greetings5(){
//     return 'Hello world';
// }

// const greetings2 = (fullName) => {
//     return 'heloo ${fullName} this is arrow function'
// };

// console.log(greetings2("john doe"));

// let numbers = [1, 2, 3, 4, 5];

// ler res1 = numbers.map(function (Element) {
//     return Element;
// }

// let res2 = numbers.map((Element) => Element);
// console.log(res);

// default parameter
// const greetings = (fullName, age) => {
//     if (fullName === undefined) {
//         fullName = "john doe";
//     }
//     if (age === undefined){
//         age = 33;
//     }
//     return  'heloo nama saya${fullNama}, daba umur saya ${age} tahun';
// }

// const greetings6  = (fullName = "johnDoe", age = 33) => 'hello bana saya ${fullName}, dan umur saya${age} tahun';

// console.log(greetings6("kyrie pondaag", 19));

// rest parameter
// const penjumlahan = (a, b, c, ...params) => {
//     let hasil = 0;
//     params.forEach((element) => {
//         hasil += element;
//     });
//     return hasil;
// };

// console.log(penjumlahan(1, 2, 3, 4, 5));

// spread operator
// let numbers = [1, 2, 3, 4, 5,];
// console.log(...numbers);

//duplikasi array
// let numbers1 = [1, 2, 3, 4, 5];
// let numbers2 = [...numbers1];

// numbers1.push(6);
// numbers1.push(7);


// console.log("numbers 1 : ", numbers1);
// console.log("numbers 2 : ", numbers2);

//menggabungkan array
let numbers1 = [1, 2, 3];
let numbers2 = [5, 6, 7];
let numbers3 = [8, 9, 10];

let combineNumbers5 = numbers1.concat(numbers2, numbers3);
console.log(combineNumbers5);

let combineNumbers6 = [...numbers1, 4, ...numbers2, ...numbers3];
console.log(combineNumbers6);


