
// var a = 20

// a = a + 10
// a+=10
// a ++ ინკრემენტი 
// a-- დეკრემენტი
// console.log(++a) // კონსოლში რომ გავაკეთოთ ინკემენტი და დეკრემენტი


//ტერნალური ოპერატორი

// var a = 20

// var b = a > 10 ? "ok" : "Nope"

// console.log(b)

// if (a >20) {
//     b = "ok"

// }
// else{
//     b ="nope"
// }

//  var action  = prompt ("+,-,*,/")
 
//  switch(action){
//      case "+":         
//          console.log(10 + 20)
//         break
//      case "-" :
//          console.log (10 -20)
//         break
//      case "*" :
//          console.log (10 *20)
//         break
//      case "/" :
//          console.log (10 / 20)
//         break
//      default :
//          console.log("it is not corect" )
//         break
//     }
    

// var action  =  Number (prompt ("enter number "))

// switch (action){
//      case 1:
//           console.log ("you enter" + action)
//      break
//      case 2:
//           console.log ("you enter" + action)
//      break
//      case 3:
//          console.log ("you enter" + action)
//      break
//      case 4:
//          console.log ("you enter" + action)
//      break
//      case 5:
//          console.log ("you enter" + action)
//      break
//      default :
//          console.log("it is string")
//      break
// }


//ნაკიანი წლიწადი არის ისეთი წელიწადი უნაშათდ იყოფა 
//4 ზე და ან იყოფა 100-ზე ან 400 ნაშთით.

// var year = Number(prompt ("enter year"))
// var  isLeapYear = year % 4 == 0 && (year % 100 == 0 || year % 400 != 0)

// switch (isLeapYear) {
//     case true :
//         console.log("it is Leap Year")
//         break
//     case false: 
//         console.log("it is not Leap Year")
//         break
// }


// var phy = Number (prompt("enter mark or subject  (1-5):"))
// var chem = Number(prompt("enter mark or subject  (1-5):"))
// var bio = Number(prompt("enter mark or subject  (1-5):"))
// var math = Number(prompt("enter mark or subject  (1-5):"))
// var comp = Number(prompt("enter mark or subject  (1-5):"))

// // // Grade A - >= 90%
// // // Grade B - >= 80%
// // // Grade C - >= 70%
// // // Grade D- >= 60%
// // // Grade E - >= 50%
// // // Grade F- >= 40%

// var sum =  phy + chem + bio + math + comp

// var grade = sum * 100 / 25

// switch (grade >= 90 && grade <= 100) {
//     case true:
//         console.log("Grade A")
//         break
//     case false:
//         switch (grade >= 70 && grade < 80) {
//             case true:
//                 console.log("Grade B")
//                 break
//             case false:
//                 switch (grade >= 60 && grade < 70) {
//                     case true:
//                         console.log("Grade C")
//                         break
//                     case false:
//                         switch (grade >= 50 && grade < 60) {
//                             case true:
//                                 console.log("Grade D")
//                                 break
//                             case false:
//                                 switch (grade >= 40 && grade < 50) {
//                                     case true:
//                                         console.log("Grade E")
//                                         break
//                                     case false:
//                                         console.log("Grade F")
//                                     break
//                                 }
//                                 break
//                         }
//                         break
//                 }
//                 break
//         }
//         break
// }

 


 