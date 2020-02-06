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

// function squareNums (array) {
//     let newArray = array.map(function(num) {
//         return num * 2
//     })
//     return newArray
// }

// console.log(squareNums([1,2,3,4,5]))

// ================== Assignment 4 - Cities 1

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

function pickcoldCities (array) {
    let coldCities = array.filter(function(city){

        return city.temperature < 70.0
    })
    return coldCities
}

console.log(pickcoldCities(cities))

// ================== Assignment 5 - Cities 2

