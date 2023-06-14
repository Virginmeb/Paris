// Const pada Array 7 Object

//const numbers = [1, 2, 3, 4, 5];
//numbers[3] = 10;
//console.log(numbers);

//const john = {
    //firstName: "john"
    //age: 33;
  //  status: "active";

//};


//console.log(john);

//var grade = 100;

//var grade = 90;

//console.log(grade);

//String Literal

//const john = {
    //firstName: "John",
    //lastName: "Doe",
    //age: 33;
  //  status: "active",
//};


//const kalimat = `Halo nama saya ${john.firstName} ${john.lastname}, umur saya ${john.age} tahun dan status saya ${john.active}`;
//console.log(kalimat);

//Arrow Function 

//function greetings() {
//    return `Hello World`;
//}

//const greetings2 = (fullName) => {
//    return `Hello ${fullName} this is arrow function`;
//};

//console.log(greetings2("John Doe"));


//let numbers = [1, 2, 3, 4, 5];

//let re1 = numbers.map(function (element){
//    return element;
//});


//let res2 = numbers.map((element) => element);
//console.log(res2);

//Default Parameter
//const greetings = (fullName, age) => {
//    if (fullName === undefined) {
//        fullName = "Brenda";
//    }
//    if (age === undefined){
//       age = 33;
//  }
//    
//    return `Hello nama saya ${fullName}, dan umur saya ${age} tahun`
//};
//const greetings6 = (fullName = "Brenda", age = 33) =>
//`Hello nama saya ${fullName}, dan umur saya ${age} tahun`;

//console.log(greetings6("Brenda", 33));

//Rest Parameter 
//const penjumlahan = (a, b, c, d, e, f, g) => {
//    let numbers = (a, b, c, d, e, f, g);
//    let hasil = 0 ;
//    numbers.forEach((element) => {
//        hasil += element;
//    });
//    return hasil;
//};

//console.log(penjumlahan(1, 2, 3, 8, 9, 22, 99));

//SPREAD OPERATOR

//let numbers = [1, 2, 3, 4, 5];
//console.log(...numbers);

//DUPLIKASI ARRAY
/*
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [numbers1];

numbers1.push(6);
numbers2.push(7);

console.log("numbers1 : ", numbers1);
console.log("numbers2 : ", numbers2);
*/

