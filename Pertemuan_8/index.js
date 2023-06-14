    //Destructuring Array dan Object

/*
let numbers = [1, 2, 3, 4, 5];

    //Cara lama
let num1 = numbers[0];
let num2 = numbers[1];
let num3 = numbers[2];
let num4 = numbers[3];
let num5 = numbers[4];


    // num1-num5 itu bukan array hanya untuk mempersingkat
    //Destructuring Semua
let [num1, num2, num3, num4, num5] = numbers;


    //Destruction beberapa
let [num1, , num3, , num5] = numbers;   //kalau hanya ingni mengambil 1 saja let [num1, , , , , , ]numbers;

console.log(num1);
console.log(num2);

let Elvano = {
    fullName: "Elvano Barahama",
    age: 21,
    isMarried: "False",
};
const {fullName, age, isMarried} = Elvano   //untuk menganti nama variabel nya harus mengunakan : contoh age: umur,
console.log(fullName);
console.log(age);
console.log(isMarried);

    //Destructing pada parameter fungsi
const greetings = ({fullName, age}) => {    //Jika di sni mengunakan (obj) di bagian bawah juga mengunakan obj 
    return `Hello my name is ${fullName} and I'm ${age} years old`; //contoh ${obj.fullName}
};
console.log(greetings(Elvano));
*/

//--------------------//--------------------//--------------------//

/*
    //Module Export & Import
import { nama, numbers, Elvano } from "./utils.js";
import greetings from "./utils.js";
import penjumlahan from "./penjumlahan.js";

console.log(nama);
console.log(numbers);
console.log(Elvano);

console.log(greetings());
console.log(penambahan (10, 20));
*/

//--------------------//--------------------//--------------------//

/*
    //synchronous mengblock ketika sudah menumpuk aka di block 
console.log("proses 1");
console.log("proses 2");
console.log("proses 3");
console.log("proses 4");
*/

/*
    //asynchronous (unbloking) menunggu dlu sebelum di proses
    //1.Pararel
setTimeout(() =>{
    console.log("proses 1");
},1000);

setTimeout(() =>{
    console.log("proses 2");
},2000);

setTimeout(() =>{
    console.log("proses 3");
},3000);

setTimeout(() =>{
    console.log("proses 4");
},4000);
*/

/*
    //2.concurent
setTimeout(() =>{
    console.log("proses 1")
    setTimeout(() =>{
        console.log("proses 2");
        setTimeout(() =>{
            console.log("proses 3");
            setTimeout(() =>{
                console.log("proses 4");
            },1000);
        },2000);
    },3000);
},4000);
*/

    //Promes
let condition = true
let newPromise = new Promise((resolve, reject)=>{
    if (condition){
        resolve("Berhasil");
    } else{
        reject("Gagal");
    }
});

/*
    //1. Then - Catch
newPromise.then((result) =>{
    console.log(result);
});
    // kalau error masukan 
//.catch((error) => console.log(error));
*/

    //2. Async - Await
const getPromise = async () =>{
    let result = await newPromise;
    console.log(result);
};// ini di hps kalau error
    // jika ada error masukan 
//catch (error){
//    console.log(error);
//};
getPromise();





