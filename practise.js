// var age = 28;
// console.log(age);

// let userName = "Ulugbek";
// console.log(userName)


// let budget = prompt("Enter your total budget: ");
// budget = parseFloat(budget); // Convert budget to a number

// let expense1 = prompt("Enter the first expense: ");
// expense1 = parseFloat(expense1); // Convert expense1 to a number

// let expense2 = prompt("Enter the second expense: ");
// expense2 = parseFloat(expense2); // Convert expense2 to a number

// let expense3 = prompt("Enter the third expense: ");
// expense3 = parseFloat(expense3); // Convert expense3 to a number

// let totalExpenses = expense1 + expense2 + expense3; // Calculate total expenses
// let remainingBudget = budget - totalExpenses; // Subtract total expenses from the budget

// // Check if the budget is negative and print a warning if overspent
// if (remainingBudget < 0) {
// console.log("Warning: You have overspent! Your budget is negative.");
// } else {
// console.log(`You have ${remainingBudget.toFixed(2)} remaining in your budget.`);
// }


// ARRAYS in Javascript HOMEWORK

// function first(arr, n){
//     if (n === undefined) {
//         return arr[0];
//     }
//     if (n<=0){
//         return [];
//     }
//     return arr.slice(0,n);
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));


// function last(arr, n){
//     if(n===undefined){
//         return arr[arr.length-1];
//     }
//     if(n<=0){
//         return [];
//     }
//     return arr.slice(-n);
// }
// console.log(last([7, 9, 0, -2]))
// console.log(last([7, 9, 0, -2], 3))
// console.log(last([7, 9, 0, -2], 6))


// let myColor=["Red", "Green", "White", "Black"]
// let result=myColor.join(" , ")
// console.log(result)

    // function insertDashes(num){
    //     let str =num.toString();
    //     let result="";
    //     for(let i=0; i<str.length; i++){
    //         result+=str[i];
    //         if (str[i] % 2===0 && (str[i+1]) % 2===0){
    //                 result+="-";
    //             }
    //         }
    //     return result;
    // }
    // console.log(insertDashes("025468"));
    // console.log(insertDashes("268928"))

    // function swapCase(str) {
    //     let result = ""; // Natijani saqlash uchun bo‘sh string
    
    //     for (let i = 0; i < str.length; i++) {
    //         let char = str[i];
    
    //         // Agar harf katta bo‘lsa, kichikka o‘tkazamiz
    //         if (char === char.toUpperCase()) {
    //             result += char.toLowerCase();
    //         } 
    //         // Agar harf kichik bo‘lsa, kattaga o‘tkazamiz
    //         else {
    //             result += char.toUpperCase();
    //         }
    //     }
    
    //     return result;
    // }
    
    // // Test qilish
    // console.log(swapCase("The Quick Brown Fox")); // -> "tHE qUICK bROWN fOX"
    // console.log(swapCase("Hello World!")); // -> "hELLO wORLD!"
    // console.log(swapCase("JavaScript IS Fun!")); // -> "jAVAsCRIPT is fUN!"

// function swapCase(str){
//     let result="";
//     for (let i=0; i<str.length; i++){
//         let char=str[i];
//         if (char===char.toUpperCase()){
//             result+=char.toLowerCase();
//         }
//         else{
//             result+=char.toUpperCase();
//         }
//     }
//     return result;
// }
// console.log(swapCase("HuSnorA"));
// console.log(swapCase("SOlih"))

// const student=[
//     {name:"Ali", scores:[80, 75, 90, 85]},
//     {name: "Bobur", scores:[45, 50, 40, 55]},
//     {name:"Shahnoza", scores:[70, 85, 78, 90]},
//     {name:"Diyor", scores:[30, 40, 35, 20]}
// ];
// function averageScore(scores){
//     return scores.reduce((sum, score)=> sum + score, 0) /scores.length;
// }
// let topStudent=student[0];
// student.forEach(student=>{
//     student.average=averageScore(student.scores);
//     student.passed=student.average >=50;

//     if (student.average> topStudent.average){
//         topStudent=student;
//     }
// });
// student.forEach(student => {
//     console.log(`${student.name}: O'rtacha - ${student.average.toFixed(2)}, O'tish - ${student.passed ? "Ha" : "Yo'q"}`);
// });

// console.log(`\nEng yaxshi talaba: ${topStudent.name} (${topStudent.average.toFixed(2)})`);
