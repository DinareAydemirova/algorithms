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

// let num1=[1,2,3,4,5,6,7,8,9,10]
// let num2 =[1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i<num1.length; i++){
//     console.log("-------------------------")
//     for(let j=0; j<num2.length; j++){
//         console.log(`${num1[i]} x ${num2[j]} = ${num1[i]*num2[j]}`)
//     }
// }