// alert("Hello!");
// alert("Hello!");
// console.log("Hi there!")
// alert("Hello!");
// alert("Hello!");
// console.log("testing console");

/**rtfyhrtu
 * hgfdh
 * hfdhfd
 * hgfdhdf
 * hgfdhfd
 * hdfhdf
 * 
 */

// DataType - Өгөгдлийн төрөл

// STRING - Тект төвтэй дата => "text";
// NUMBER - Тоон төрлийн дата => 1234567890
// Boolean - true (1), false (0)
// null - хоосон
// undefined - тодорхойгүй...

// 1. STRING
// console.log(typeof 123)

// Хувьсагч - Variables
// var huvisagch = true;
// console.log(typeof huvisagch);

// var x = 5;
// var y = 3;
// var z = x; //5

// // x = 7

// x=y; // 3
// y=z;

// console.log(x) //5
// console.log(y) //3
// Converting datatype
// 1. toog string bolgoh
// var nas = 20;
// var strNas = nas.toString();

// console.log(strNas)
// console.log(nas)


// 2. String datag too ruu horvuuleh

// minii ner => miniiNer
// parse integer (Number - buhel too)

// var rating = "5";
// console.log( parseInt(rating) );

// string, too
// var ner = "Narada";
// var nas = 20;

// console.log("Сайн байна уу... Миний нэр бол " + ner + ". Би " + nas + " настай.")

// var myVar1 = "Сайн";
// var myVar2 = "Байна уу...";

// console.log(myVar1 + ' ' + myVar2);

// Сайн байна уу...

// // Operators in JS
// var x = 5;
// // ++
// x++; // => x = x + 1
// // --
// x--; // => x = x - 1
// // 
// var y = 7; // 3

// y += 3; // => y = y + 3;
// y += 3;
// y += 3;
// y += 10; // 26


// var z = 4;

// z *= 3; // => z = z * 3
// z *= 3; // 36
// z /= 3;

// // remainder operator %
// var p = 10%4; // 2
// var t = 10%7; // 3

// console.log(p - t);

// Condition
// var x = 10%3;

// console.log(x === '1');

//  = - huvisagch zarlah , huvisagchiin utgiig oorchloh

// == nuhtsul shalgah (eronhiid n)
// === - nuhtsul shalgah (ogogdliin torliig hamt shalgana)


// !== - ylgaatai esehiig shalgah

// 5 <= 10%3

// AND &&, OR || logic
// condition1 && condition2 => ali ch case biyleh estoi

// condition1 || condition2 => ali neg n bieleh 

// 5м радиустай тойргийн уртыг, талбайг ол.
// Len = PI*D - toirgiin urt
// pi = 3.1415

// Area = PI*r2
// var radius = 5;
// var pi = 3.1415;
// var diameter = radius * 2;

// var len = pi * diameter;
// var area = pi * (radius ** 2);

// console.log("Тойргийн урт: " + len);
// console.log("Тойргийн талбай: " + area);
// 5м болон 7м талуудтай тэгш өнцөгтийн талбай болон периметр, диагоналийг ол... 
// var urgun = 5;
// var urt = 7;
// var talbai = urgun * urt;
// var perimeter = 2 * (urgun + urt);

// var diagonal = (urgun**2 + urt**2) ** (1/2);

// console.log("Тэгш өнцөгтийн талбай: " + talbai);
// console.log("Тэгш өнцөгтийн периметр: " + perimeter);
// console.log("Тэгш өнцөгтийн диагональ: " + diagonal);


// 10 ажилтантай стартап компанийн ажилтан тус бүр    1.2сая, 1.5сая, 1.1сая, 2сая, 2.2сая,800мянга, 700мянга, 750мянга, 600мянга, 500мянга төгрөгийн цалинтай бол:
//  1. ажилчдын дундаж цалинг тооц...
//  2. хэрэв дундаж цалин 850-с бага бол, дунджаас бага гэсэн үр дүнг консолд хэвлэ.
//  3. 850-с их бол дунджаас их гэж хэвлэ...

// If Statement, if else
// var nas = 16;
// if(nas > 18){
//     console.log("Adult")
// } else {
//     console.log("Child")
// }

// var dundaj = 0.85;
// var standartDundanj = 0.85;

// if(dundaj >= standartDundanj){
//     console.log('dundjaas ih')
// } else {
//     console.log('dundjaas baga')
// }

// if else if
// var nas = prompt("Нас оруул...");
// if(nas >= 0){
//     if(nas >= 50){
//         console.log("Old age")
//     } else if(nas >= 13 && nas <= 19){
//         console.log("Teenager")
//     } else if(nas >= 20 && nas <= 49){
//         console.log("Adult")
//     } else {
//         console.log("Child")
//     }
// } else {
//     console.log("buruu utga oruulsan bna")
// }


// LOOP, ARRAYS, OBJECT
// 1. LOOP - Давталт
// for, for of, for in, forEach, while, do while
// var sum = 0
// for(var i = 1; i <= 100; i++){ // 11
//     var counter = 0;
//     for(var j = 1; j <= i; j++){
//         if(i % j === 0){
//             counter++;
//         }
//     }
//     if(counter === 2 || counter === 1){
//         sum+=i;
//     }
// }

// 0-100 хүртэл бүх тоон дээр давталт хийгээд бүх сондгой тоог консолд хэвлэ.

// var ner = "Narada";
// for(var i = 0; i < ner.length; i++){
//     if(ner[i] === 'a'){
//         console.log(ner[i])
//     }
// }

// var x = prompt('too oruul');
// var sum = 0;
// for(var i = 0; i < x.length; i++){
//     if(+x[i]%2 === 0){
//         sum += +x[i]
//     }
// }
// var str = "NAR"
// var reverse = '';
// for(var i = x.length - 1; i >= 0; i--){
//     reverse += x[i];
// }

// if(x === reverse){
//     console.log(x + ": Палиндром тоо мөн...")
// } else {
//     console.log(x + ": Палиндром тоо биш...")
// }

// var x = prompt("Эхний тоог оруул");
// var y = prompt("2 дахь тоог оруул");

// console.log(x ** y)
// var z = prompt("3 дахь тоог оруул");

// var counter = 0;

// if(+x === 0){
//     counter++;
// }
// if(+y === 0){
//     counter++;
// }
// if(+z === 0){
//     counter++;
// }

// for(var i = 0; i <= 100; i++){
//     if(i >= 10 && i < 100){
//         console.log(i)
//     }
// }

// var x = prompt('too oruul'); // 123
// // console.log(x.length);
// var counter = 0;
// for(var i = 0; i < x.length; i++){
//     if(x[i]%3 === 0){
//         counter++; // counter = counter + 1
//     }
// }

// crystal19950923@gmail.com

// Loop , var;

// Loop - Davtalt

// nuhtsol - true, false

// 1 - true, 0 - false

// for(var i = 1; i < 10; i++){
//     if(i%3 === 0){ // === 1, 0, true
//         console.log(i)
//     }
// }

// Array [5, 23, 6, 5, 2, 3]

// var email = prompt('Email haygaa oruulna uu...')
// var password = prompt('Password')

// if(email === "narada@mail.com"){
//     if(password === "myPass1234"){
//         console.log('Тавтай морил')
//     } else {
//         console.log("Имэйл эсвэл нууц үг буруу байна.")
//     }
// } else {
//     console.log('Хэрэглэгч олдсонгүй')
// }


// index
// var ner = "Narada";
// //         012345

// for(var i = 0; i < ner.length; i++){
//     console.log(ner[i]);
// }

// Arrays - Data structure
// array - Массив

// for(var i = 0; i < array.length; i++){
//     if(typeof array[i] === 'string'){
//         console.log(array[i])
//     }
// }

// for(el of array){
    //     if(typeof el === 'number'){
        //         console.log(el)
        //     }
        // }
        
        // "Narada"
        // "N" - Nice
        // "a" - awesome
        // "r" - reasonable
        // "a" - amazing
        // "d" - dancer
        // "a" - attractive
                
// var array = ["narada", 23, true, "John", "Sarah", 456];

// var random = parseInt(Math.random() * array.length);

// console.log(array[random]);

// 1. Ooriin neriig oruul.
// 2. Neriin useg bolgon dr 5 ug hadgal
// 3. nernii useg bolgoniig ymar useg bolohiig shalga
// 4. tuhain usgeer ehlesen ugnuudees sanamsargui bdlaar ng ug songo
// 5. ur dung console-d hevle

// [5, 6, 0, 1, 2, 7]   target = 9;

// // Array methods
// var arr = [5, 6, 7, 8, 9];

// // push - массивийн сүүлд элемент нэмж өгнө
// arr.push(10, 11, 12, 13, 14);

// // pop - массивийн сүүлийн элементийг устгана
// arr.pop();
// arr.pop();
// arr.pop();

// // unshift - массивийн эхэнд элемент нэмнэ
// arr.unshift(2, 3, 4);

// // shift() - массивийн эхний элементийг устгана
// arr.shift();

// // reverse() - урвуу массив үүсгэнэ.
// arr.reverse();

// arr.pop()
// // 11, 10, 9, 8, 7, 6, 5, 4, 3
// // splice - массив дотроос дурын элементийг устгана
// arr.splice(3, 1)

// // 11, 10, 9, 7, 6, 5, 4, 3
// // slice - arr-g tasdah

// var x = arr.slice(1, 4);

// ES1, 2, 3 - EcmaScript
// ES5 - 2009 - Buh Browser demjine / var /
// ES6 - 2015 - shine standart  / let /
// ES7 - 2016
// ES8 - 2017
// ES9 - 2018
// ES10 - 2019
// ES11 - 2020
// ES12 - 2021

// Оролт: [5, 6, 0, 1, 2, 7]   target = 9;
// i = 0 uyd0 indextei element 5 bna.
// 5+6, 5+0, 5+1, 5+2, 5+7;

// i = 1 uyd 1 indextei element 6 bna
// 6+0, 6+1, 6+2, 6+7;

// i = 2 => 0


// Гаралт: [4, 5]

// let arr = [5, 6, 0, 1, 2, 7];
// let target = 9;

// let result = [];

// for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if(arr[i] + arr[j] === target){
//             result.push(i, j);
//         }
//     }
// }

// console.log(result)

// let arr = ["Ulaanbaatar", 123, true, "Beijing", 258, "Tokyo", false, "Seoul"];

// let result = [];

// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === "string"){
//         result.push(arr[i])
//     }
// }

// Array - Data Structure
// Object

let user = {
    ner: "Narada",
    email: "narada@mail.com",
    mergejil: "Designer"
}

user.ner = "Jessica";
user.utas = 99663322;

let user1 = {
    ner: "John",
    email: "john@exapmle.com",
    mergejil: "Teacher"
}
// [{}, {}, {}, {}]
// let users = [{ner: "Gantulga", nas: 25}, {ner: "Nyamgerel"}]

// Array
let email = prompt("Haih email oruul");
let users = [user, user1];

// for(let i = 0; i < users.length; i++){
    // if(users[i].email === email){
    //     console.log(users[i]);
    // }
// }

// for in, for of

// for(usr of users){
//     if(usr.email === email){
//         console.log(usr);
//     }
// }

// for(pro in user){
//     if(pro === "email"){
//         console.log(user[pro])
//     }
// }