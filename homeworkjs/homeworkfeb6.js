// ============================================= Homework Thursday Feb 6th

// =================== Assignment 1 -  Positive Numbers

// function positiveNums (array) {
//     let newArray = array.filter(function(num) {
//         return num > 0
//     })
//     return newArray
// }

// console.log(positiveNums([1,2,3, -9, -46]))

// ================== Assignment 2 - Even Numbers

// function evenNums (array) {
//     let newArray = array.filter(function(num) {
        
//         return num % 2 == 0
//     })
//     return newArray
// }
// console.log(evenNums([1,2,3, -9, 4, 6]))

// ================== Assignment 3 - Square the Numbers

function squareNums (array) {
    let newArray = array.map(function(num) {
        return num * 2
    })
    return newArray
}

console.log(squareNums([1,2,3,4,5]))