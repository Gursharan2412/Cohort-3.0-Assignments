// var students = [
//     {name: 'Aman', marks: 85},
//     {name: 'Priya', marks: 92},
//     {name: 'Raj', marks: 72}
// ];
// function highestScorer(students){
//     let topper = students[0];
//     for(let i = 1; i < students.length; i++){
//         if(students[i].marks > topper.marks){
//             topper = students[i];
//             // console.log(topper);

//         }
//     }
//     return {
//         topper: topper.name,
//         markes: topper.marks
//     }
// }
// // highestScorer(students)
// console.log(highestScorer(students));

// Solution 1) 
// const users = [
//   { name: "Aman", age: 20 },
//   { name: "Dev", age: 17 },
//   { name: "Priya", age: 25 },
//   { name: "Raj", age: 16 }
// ];
// function countAdults(users){
//     let count =  0;
//     for(let i = 0; i < users.length; i++){
//         if(users[i].age >= 18){
//             count++;
//         }
//     }
//     return count
// }
// // countAdults(users)
// console.log(countAdults(users));

// Solution 2) 
const users = [
  { name: "Aman", age: 20 },
  { name: "Dev", age: 17 },
  { name: "Priya", age: 25 },
  { name: "Raj", age: 16 }
];
var out = users.map(function(elem){
    for(let i = 0; i < elem.length; i++){
        if(elem[i].age >= 18){
            // console.log(elem[i].name);
            return elem[i].name
        }
    }
    // return elem[i].name
})
console.log(out);
