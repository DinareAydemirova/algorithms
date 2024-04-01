// 1) İstifadəçidən 3 ədəd alın. Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin

// let num1 = +prompt("enter side 1")
// let num2 = +prompt ("enter side 2")
// let num3 = +prompt("enter side 3")
// if (num1 + num2 > num3 && num2 + num3 > num1 && num1 + num3 > num2) {
//     console.log("This is a triangle.");
//  } else {
//      console.log("This is not a triangle.");
//  }

// 2) İstifadəçidən 3 ədəd alın. Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.

// let num1= prompt("enter side 1")
// let num2 = prompt("enter sode 2")
// let num3 = prompt("enter side 3")
// if(num1==num2 && num3==num2 && num1==num3){
//     console.log("this is a equal triangle")
// }else{
//     console.log("it is right triangle")
// }

// 3)  İstifadəçidən 2 ədəd alın. Hansının ən böyük olduğunu tapan proqram tərtib edin

// let num1 = prompt("enter number")
// let num2 = prompt("enter number")
// if(num1>num2){
//     console.log(num1 ,">" ,num2)
// }else if(num2>num1){
//     console.log(num2 ,">" ,num1)

// }else{
//     console.log(num1 ,"=",num2)
// }

// 4) İstifadəçidən 3 ədəd alın. Hansının ən böyük olduğunu tərtib edin.

// let num1 = prompt("enter number")
// let num2 = prompt("enter number")
// let num3 = prompt("enter number")

// if(num1>num2 && num1>num3){
//     console.log(num1)
// }else if(num2>num1 && num2>num3){
//     console.log(num2)

// }else if(num3>num2 && num3>num1){
//     console.log(num3)
// }else{
//     console.log("numbers are equal")
// }

// 5) İstifadəçidən 3 ədəd alın. Onları artan sıra ilə düzən proqram tərtib edin.

// let num1 = +prompt("Enter number 1");
// let num2 = +prompt("Enter number 2");
// let num3 = +prompt("Enter number 3");

// if (num1 <= num2 && num1 <= num3) {
//     if (num2 <= num3) {
//         console.log(num1, num2, num3);
//     } else {
//         console.log(num1, num3, num2);
//     }
// } else if (num2 <= num1 && num2 <= num3) {
//     if (num1 <= num3) {
//         console.log(num2, num1, num3);
//     } else {
//         console.log(num2, num3, num1);
//     }
// } else {
//     if (num1 <= num2) {
//         console.log(num3, num1, num2);
//     } else {
//         console.log(num3, num2, num1);
//     }
// }

// 6) Kinoteatra bilet satan proqram yazın. Şərtlər: Bilet qiyməti 10 AZN, yaş 18+ olmalıdır, yaş 18-dirsə minimum 3 bilet almalıdır.

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

// 7) Bankomat proqramı tərtib edin. 1-düyməsini seçdikdə balans ekranda göstərilsin. 2-düyməsini seçdikdə balansa mədaxil olunsun və balans ekranda göstərilsin, 3-düyməsini seçdikdə balansdan pul çıxarılsın. 4-düyməsini seçdikdə çıxış verilsin.

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


