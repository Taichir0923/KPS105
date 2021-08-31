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