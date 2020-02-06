// ============================================= Homework Thursday Feb 6th

// Assignment 1 -  Positive Numbers

function positiveNums (array) {
    let newArray = array.filter(function(num) {

        return num > 0
    })
    return newArray
}


console.log(positiveNums([1,2,3, -9, -46]))
