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




const string="hello world"
console.log(string)

let result


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
console.log(result)
