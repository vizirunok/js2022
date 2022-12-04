// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write.
let hello = 'hello';
console.log(hello);
document.write(hello);
// alert(hello);

const Owu = 'Owu';
console.log(Owu);
document.write(Owu);
// alert(Owu);

var com = 'com';
console.log(com);
document.write(com);
// alert(com);

let ua = 'ua';
console.log(ua);
document.write(ua);
// alert(ua);

const a = 1;
console.log(a);
document.write(a);
// alert(a);

var s = 10;
console.log(s);
document.write(s);
// alert(s);

let d = -999;
document.write(d);
console.log(d);
// alert(d);

const f = 123;
document.write(f);
console.log(f);
// alert(f);

var g = 3.14;
document.write(g);
console.log(g);
// alert(g);

let h = 2.7;
document.write(h);
console.log(h);
// alert(h);

const j = 2.16;
document.write(j);
console.log(j);
// alert(j);

var k = false;
document.write(k);
console.log(k);
// alert(k);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
const firstName = 'Andrii';
const lastName = 'Maistrenko';

const person1 = `${firstName} ${lastName}`;
console.log(person1);

const person2 = firstName + ' ' + lastName;
console.log(person2);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let v = 100;
let b = '100';
let c = true;

console.log(typeof v);
console.log(typeof b);
console.log(typeof c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
const NamePerson = prompt('What is your name?');
console.log(NamePerson);

const FatherName = prompt('What is your father name?');
console.log(FatherName);

const Old = +prompt('How old are you?');
console.log(Old);
