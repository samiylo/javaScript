// Qwestion 1

function madlib (name, subject) {
    var newString = name + "'s favorite subject in school is " + subject + ".";
    return newString
}

console.log(madlib("Samiylo", "Science"))

// Qwestion 2

function tipAmount (bill, service) {
    if (service == "good") {
        let tip = bill / 20;
        return tip;
    }

    else if (service == "fair") {
        let tip = bill / 15;
        return tip;
    }

    else if (service == "bad") {
        let tip = bill / 10;
        return tip;

    }
}

tipAmount(100, "good")

// Qwestion 3

function totalAmount (bill, service) {
    if (service == "good") {
        let tip = bill / 20;
        return tip + bill;
    }

    else if (service == "fair") {
        let tip = bill / 15;
        return tip + bill;
    }

    else if (service == "bad") {
        let tip = bill / 10;
        return tip + bill;

    }
}

// Qwestion 4

function printNumbers (start, end) {
    var i = start
    
    while (i < end) {
        console.log(i)
        i++;
        
    }
    
    
    }

// printNumbers(1,10)

// Qwestion 5

function printSquare (size) {
    let counter = 0
    while (counter < size) {
        let width = 0
        var ast = []
        while (width < size) {
            ast.push('*')
            width ++;
        }
        finalString = ast.join(',')
        console.log(finalString)
        counter++;
    }


}
printSquare(4)