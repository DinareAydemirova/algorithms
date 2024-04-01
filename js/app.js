// let side1=4;
// let side2=10;
// let side3=15;
// if(side1+side2>side3){
//     console.log("it is a triangle")
// }else{
//     console.log("it is not a triangle")
// }





// let side1=3;
// let side2=5;
// let side3=5;
// if(side1==side2 && side2==side3 && side1==side3 ){
//   console.log("it is a equal triangle")
// }else{
//   console.log("it is not a equal triangle")
// }





// let a= 7;
// let b=5;
// let num
// if(a>b){
//  num=a
// }else if(b>a){
//  num=b
// }else{
//   console.log("a and b are equal")
// }
// console.log(num)






// let a =15;
// let b=20;
// let c= 40;
// let num
// if(a>b && a>c){
//   num=a
// }else if(b>a && b>c){
//   num=b
// }else if(c>a && c>b){
//   num=c
// }else{
//   console.log("a b and c are equal")
// }
// console.log(num)







// let a = 5;
// let b = 10;
// let c = 7;
// if (a < b && a < c && b < c) {
//   console.log(a);
//     console.log(b);
//     console.log(c);

// } else if (b < a && b < c && a < c) {
//   console.log(b);
//     console.log(a);
//     console.log(c);

// } else if (c < a && c < b && a < b) {
//   console.log(c);
//     console.log(a);
//     console.log(b);

// } else if (a < b && a < c && c < b) {
//   console.log(a);
//     console.log(c);
//     console.log(b);

// } else if (b < a && b < c && c < a) {
//   console.log(b);
//     console.log(c);
//     console.log(a);

// } else if (c < a && c < b && b < a) {
//   console.log(c);
//     console.log(b);
//     console.log(a);

// }







// let age = Number(prompt('Enter your age'));
// let balance = 20;

// if (!isNaN(age)) {
//     if (age < 18) {
//         alert("Only 18+ !!!");
//     } else {
//         let ticket = Number(prompt('Enter the number of tickets'));
//         if (!isNaN(ticket)) {
//             if (age === 18 && ticket <= 3) {
//                 if (balance >= 10) {
//                     console.log('Enjoy');
//                     console.log(`Your balance: ${balance - 10}`);
//                 } else {
//                     alert("Balance is not enough");
//                 }
//             } else if (age === 18 && ticket > 3) {
//                 console.log('Only 3 tickets permitted');
//             } else {
//                 if (balance >= 10) {
//                     console.log('Enjoy');
//                     console.log(`Your balance: ${balance - 10}`);
//                 } else {
//                     alert("Balance is not enough");
//                 }
//             }
//         } else {
//             console.log("Please enter a valid number");
//         }
//     }
// } else {
//     console.log("Please enter a valid number");
// }











// let balance=100;

// function Balance(){
//     console.log("balans" , balance)
// }
// function medaxilEt(amount){
//     balance+=amount
//     console.log(amount + "azn daxil etdiniz")
//     Balance()
// }
// function mexaricEt(amount){
//     balance-=amount
//     console.log(amount + "azn balnsdan çıxarıldı")
//     Balance()
// }

// let press= prompt('1. balans 2 .medaxil 3.mexaric 4. çıxış')
// switch(press){
//     case '1':
//         Balance()
//         break
//     case '2':
//         let medaxil= +prompt('balansa daxil edin')
//         medaxilEt(medaxil)
//         break
//     case '3':
//         let mexaric= +prompt('balans daxil edin')
//          mexaricEt(mexaric)
//          break
//     case '4':
//         console.log("təşəkkürlər")
//         break
//     default:
//         console.log("yanlış dəyər")
//         break
// }



// if(press==='1'){
//     Balance()
// }else if(press==='2'){
//     let medaxil=prompt('balansa daxil edin')
//     medaxilEt(medaxil)
// }else if(press==='3'){
//     let mexaric=prompt('balans daxil edin')
//     mexaricEt(mexaric)
// }else if(press=='4'){
//     console.log("təşəkkürlər")
// }else{
//     console.log("yanlış dəyər")
// }


