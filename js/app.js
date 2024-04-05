// let password = prompt("please enter password");
// let confirmPassword = prompt("confirm your password");

// if (password == "") {
//   alert("password required");
// } else if (password == confirmPassword) {
//   alert("succesful");
// } else if (password != confirmPassword) {
//   alert("please enter valid password");
// }

// let money= prompt("enter your money")
// let kq = prompt("enter kq")
// if(!isNaN(money) && !isNaN(kq)){
//     if((money/kq)<2){
//         alert("bu almadir")
//      }else if((money/kq)<4){
//          alert("bu banandi")
//      }else if((money/kq)<15){
//          alert("bu anansdi")
//      }else{
//          alert("bele meyve yoxdu")
//      }
// }else{
//     alert("enter valid number")
// }

// let season=prompt("enter season")

// if(season=="winter"){
//     alert("december , january , february")
// }else if(season=="spring"){
//     alert("march april may")
// }else if(season=="summer"){
//     alert("june july august")
// }else if(season=="aotumn"){
//     alert("september october november")
// }

// let fruit = prompt("name of the fruit");
// let kg = Number(prompt("enter kg"));
// let alma = 1;
// let armud = 2;
// switch (fruit) {
//   case "alma":
//     console.log(`${alma * kg} azn alma`);
//     break;
//   case "armud":
//     console.log(`${armud * kg} azn armud`);
//     break;
//   default:
//     console.log("bele meyve yoxdu");
//     break;
// }

// let num= +prompt("enter numbrr")
// let sum=0
// for(let i=0; i<num.length; i++){
//     let number =num[i]
//     sum+=(number**3)

// }
// if(sum==num){
//     console.log(`armstrongdur ${num}`)
// }else{
//     console.log(`armstrong deyil ${num}`)
// }

// for(let i=1; i<=1000;i++){
//     let num=i**2
//     if(num<1000 && num>10){
//         console.log(i**2)
//     }
// }

// let res = ["12", 5, 5, 6, 7, -7, NaN, undefined, false, null];
// let res1 = [];
// for (let i of res) {
//   if (i * 1 === i) {
//     res1.push(i);
//   }
// }
// console.log(res1);

// let res = [5 , 6, -7,88,9,5,4];
// let num = res[0];
// for (let i=0; i<res.length;i++) {
//   let digit = res[i];
//   if (num < digit) {
//     num = digit;
//   }
// }
// console.log(num);

//?  1-500 arasi cut ededlerin cemi ile tek edrdlerin ceminin ferqlerinin menfi olub olmadigini yoxla

// let sumEven=0
// let sumOdd=0
// for (let i = 1; i <=500; i++) {
//     if(i%2==0){
//         sumEven+=i
//     }else if(i%2==1){
//         sumOdd+=i
//     }
// }
// if(sumEven-sumOdd<0){
//     console.log("subtraction is negative:", sumEven-sumOdd  )
// }else(
//     console.log("subtraction is positive:", sumEven-sumOdd  )
// )

//? Fibonachi ededleri

// let num=[0,1]
// for(let i=2; i<10;i++){
//     num[i]=num[i-1]+num[i-2]
// }
// console.log(num)

//? vurma cedveli

// for(let i=1; i<10; i++){
//     for(let j=1; j<10; j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
//     console.log("-------------------------")
// }

//

// let arr =[23, 17, 6, 45, 67, 34]
// let min=arr[0]
// let minindex=0
// for(let i=0; i<arr.length;i++){
//   if(min>arr[i]){
//     min=arr[i]
//     minindex=i
//   }
// }
// console.log(minindex)

//? arraydaki tek ededlerin cemini tapin

// let arr = [23, 17, 6, 45, 67, 34];
// sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 2; j < arr[i]; j++) {
//     if (arr[i] % j == 0) {
//       sum = sum + arr[i];
//       break;
//     }
//   }
// }
// console.log(sum);

//? factorial

// let num = Number(prompt("enter the number"));
// let factorial = 1;
// if(isNaN(num)){
//     alert("enter number!")
// }else{
//     for (let i = 1; i <= num; i++) {
//         factorial = factorial * i;
//       }
//       console.log(factorial);
// }

//?  reversed order

// let name = "Dinara";
// reverseName = "";
// for (let i = name.length - 1; i >= 0; i--) {
//   reverseName += name[i];
// }
// console.log(reverseName);

// const string="hello world"
// console.log(string)

// let result

// result=string.charAt(1)
// result=string.charAt(string.length-1)
// result=string.charCodeAt(1)
// result=string.codePointAt(1)
// result=string.concat("  dinara")
// result=string.endsWith("world")
// result=string.includes("h")
// result=string.indexOf("h")
// result=string.lastIndexOf("l")
// result=string.padEnd(20, "*")
// result=string.repeat(3)
// result=string.replace("world","dinara")
// result=string.replaceAll("o","h")
// result=string.slice(-6,-3)
// result=string.split("")
// result=string.substring(0 ,6)
// result=string.toLocaleLowerCase()
// result=string.toLocaleUpperCase()
// result=string.trim()

// console.log( "c".localeCompare("b"))
// console.log(result)

// let arr=[20,55,44,3,6,16,23,68,80]
// let sum=0
// function division(arr){
//     for (let i = 0; i < arr.length; i++) {
//       if(arr[i]%20==0){
//         sum+=arr[i]
//       }

//     }
//     return sum
// }
// console.log(division(arr))

// let sentence= prompt("enter the sentence")
// let letter=prompt("enter thr letter")
// let count=0
// function TheNumberOfLetter(sentence,letter){
//   for (let i = 0; i < sentence.length; i++) {
//       if(letter==sentence[i]){
//         count++

//       }

//   }
//   return count
// }
// console.log(TheNumberOfLetter(sentence))

// let numbers=[23,341,4000,9,99,817,0]
// let count =0
// function digitCount(numbers){
//     for (let i = 0; i < numbers.length; i++) {

//     }
// }
// digitCount(numbers)

// let sentence = "hello my name is Dinara";
// function LongWord(sentence) {
//   let word = sentence.split(" ");
//   let value = 0;
//   let y;

//   for (let i = 0; i < word.length; i++) {
//     let x = word[i];
//     if (x.length > value) {
//       value = x;
//       y = x;
//     }
//   }
//   return y;
// }
// console.log(LongWord(sentence));

// const fruit= ["banana","orange","apple","mango"]
// const arr2=[[1,2],[3,4],[5,6]]
// let result=fruit.length
// result=fruit.toString()
// result=fruit.at(3)
// result=fruit.join(" * ")
// result=fruit.pop()
// result=fruit.shift()
// result=fruit.unshift("sfssdf")
// result=fruit.delete()
// result=fruit.concat(arr2)
// result=fruit.copyWithin(2,3)
// result=arr2.flat()
// result=fruit.splice(2, 0, "Lemon", "Kiwi");
// result=fruit.slice(1)

// onsole.log(result)

let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];

//   function names(students){
//     for (let i = 0; i < students.length; i++) {
//        console.log(students[i])

//     }
//   }
//   names(students)

// function names(students){
//     for (let i = 0; i < students.length; i++) {
//        console.log(students[i].name)

//     }
//   }
//   names(students)

// function names(students){
//     for (let i = 0; i < students.length; i++) {
//        console.log("ad:",students[i].name , "soyad:",students[i].surname)

//     }
//   }
//   names(students)

// function names(students){
//     for (let i = 0; i < students.length; i++) {
//       if(students[i].fail){
//         console.log("ad:",students[i].name , "soyad:",students[i].surname)
//       }

//     }
//   }
//   names(students)

// function hobbies(students) {
//   let x = "";
//   let mostHobbies;
//   for (let i = 0; i < students.length; i++) {
//     mostHobbies = students[i];
//     if (mostHobbies.hobbies.length > x.length) {
//       x = mostHobbies.hobbies;
//     }
//   }
//   console.log("ad:", mostHobbies.name, "hobbies:", mostHobbies.hobbies);
// }
// hobbies(students);

// function AvgPoint(students) {
//   let elment;
//   let x = 0;
//   let maxAvg
//   for (let i = 0; i < students.length; i++) {
//     elment = students[i];
//     if (elment.avgPoint > x) {
//       x = elment.avgPoint;
//       maxAvg=elment

//     }

//   }
//   console.log("ad:", maxAvg.name, "soyad:", maxAvg.surname);

// }
// AvgPoint(students);

// function password(students) {
//     let elment;
//     let max = '';
//     let LongPassword
//     for (let i = 0; i < students.length; i++) {
//       elment = students[i];
//       if (elment.loginDetail.password.length > max.length) {
//         max = elment.loginDetail.password;
//         LongPassword=elment

//       }

//     }
//     console.log("ad:", LongPassword.name, "soyad:", LongPassword.surname);

//   }
//   password(students);

// function password(students) {
//   let element;
//   for (let i = 0; i < students.length; i++) {
//     element = students[i];
//     if (element.boyfriendGirlfriend) {
//       console.log("ad:" + element.name + "soyad:" + element.loginDetail.username);
//     }
//   }
// }
// password(students);

// let text = "dfjdfk,dfjdhfg fjklhdfg dfjkghd";
// function count(str) {
//   let count = 0;
//   let string = str.split(" ");
//   for (let i = 0; i < string.length; i++) {
//     count++;
//   }
//   return count;
// }
// console.log(count(text));


let word="aiueyr"


function findSait(str){
  let saits=['a','e','i','u']
  let count=0
  for (let i = 0; i < saits.length; i++) {
   let char=word.toLowerCase()
   if(char.includes(word[i])){
    count++
   }
  }
  return count
}
console.log(findSait());


