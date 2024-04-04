//?   1. 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,10)
// function sub(a,b){
//     console.log(a-b)
// }
// sub(23,4)
// function mul(a,b){
//     console.log(a*b)
// }
// mul(3,4)
// function div(a,b){
//     console.log(a/b)
// }
// div(12,4)

//?  2. Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// function calculate(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             if (b !== 0) {
//                 return a / b;
//             } else {
//                 return "Cannot divide by zero!";
//             }
//         default:
//             return "Invalid operator";
//     }
// }
// console.log(calculate(5, 3, '+'));
// console.log(calculate(7, 2, '-'));
// console.log(calculate(4, 6, '*'));
// console.log(calculate(10, 2, '/'));
// console.log(calculate(8, 0, '/'));
// console.log(calculate(5, 3, '%'));

//? 3. Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın

// function country(people) {
//     var countryNames = [];
//     for (var i = 0; i < people.length; i++) {
//         var person = people[i];
//         if (person.hasOwnProperty('country')) {
//             countryNames.push(person.country);
//         }
//     }
//     return countryNames;
// }

// var people = [
//     { name: "Alice", age: 30, country: "USA" },
//     { name: "Bob", age: 25, country: "Canada" },
//     { name: "Charlie", age: 35, country: "UK" }
// ];

// var result = country(people);
// console.log(result); 


//? 4. Hərfə görə ölkə sayının olduğu object return edən funksiya yazın

//? 5. Ən çox şəhəri olan ölkə adını return edən funksiya yazın

//? 6. Ölkə adı ən uzun olan ölkənin şəhərlərini return edən funksiya

//? 7. Bütün ölkələrin şəhər saylarının olduğu objecti return edən funksiya yazın .Nümunə {"Azerbaijan":70,"Turkey":300}

//? 8. Array-in müsbət elementlərinin cəmini tapan funksiya yazın. Əgər array-in bütün elementləri mənfidirsə geriyə 0 qaytarsın.

// function sumOfPositive(arr) {
//   let sum = 0;
//   let isNecative = true;

//   for (let num of arr) {
//     if (num > 0) {
//         isNecative = false;
//       sum += num;
//     }
//   }
//   if (isNecative) {
//     return 0;
//   } else {
//     return sum;
//   }
// }
// console.log(sumOfPositive([1, 2, 3, -4, 5]));
// console.log(sumOfPositive([-1, -2, -3]));


//? 9. Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.

// function squareArray(arr) {
//     const squaredArray = [];

//     for (let num of arr) {
//         squaredArray.push(num**2);
//     }
//     return squaredArray;
// }

// const previousArray = [1, 2, 3, 4, 5];
// const squared = squareArray(previousArray);
// console.log(squared); 


//? 10. Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik element ilə ən böyük elementin ədədi ortasıdır.

// function findMedian(arr) {
//     arr.sort((a, b) => a - b);
//     const middleIndex = Math.floor(arr.length / 2);

//     if (arr.length % 2 === 0) {
//         return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
//     } else {
//         return arr[middleIndex];
//     }
   
// }

//? 11. Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın. "My name is Gurban" - "MniG"

// function firstLetter(sentence) {
//     let result = '';
//     let words = sentence.split(' ');

//     for (let i = 0; i < words.length; i++) {
    
//         let firstLetter = words[i].charAt(0);
//         result += firstLetter;
//     }
//     return result;
// }

// let sentence = "My name is Dinara";
// let Letters = firstLetter(sentence);
// console.log(Letters); 


//? 12. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, javascript-j8t

//? 13. İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya     yazın. Məsələn - [13,67,54]

//? 14. N faktorialı hesaplayan funksiya yazın.

// function factorial(N) {
//     let result = 1;
//     for (let i = 1; i <= N; i++) {
//         result *= i;
//     }

//     return result;
// }
// console.log(factorial(5));
