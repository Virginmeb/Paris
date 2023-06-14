//Variabel

/*
let firstName ;
firstName ="Virginia"; //String
let age = 20; //Number
age = "dua puluh tahun"; 
let isMarried = false; //Boolean
let grade = 90,5;

console.log(firstName);
console.log(age);
console.log(isMarried);
console.log("Hayy Everyone nama saya " + firstName + "umur saya " + age + " Tahun" )  ;

const gender = "male";

//operators

let x = 10
let y = 20

y = x
//x=20, y=10
//x=20 

x++;

console.log(x); //11
x = x + 1;
console.log(x); //12
x +=2;
console.log(x); //15

x = 20;
console.log( x==y ); //true

let x = 20;
let y = "20";

console.log(x == y); //true
console.log(x === y); // false = gunakan ini agar lebih aman atau terhindar dari error

*/

//ternary operation
// let result = age >= 17 ? "Bisa buat ktp" : "Belum bisa biat KTP";
// console.log(result);

//function

/*
function grettings(fullName,age){ //parameter
    console.log("Hello saya " + fullName +". I'am " + age + " years old");
}

const grettings2 = function () {
    console.log(" Hello World 2" );
};

grettings("Virginia", 20); // argumen
console.log(result);
grettings2();
*/

// function = parameter
// argumen = nilai yang dikirimkan

let firstName = "Virginia"; // Global

function grettings() {
    let age = 20; // Local function
    console.log (firstName);
    if ( age ===20){
        let isEligible = true; // local blok
    }
}
grettings();


