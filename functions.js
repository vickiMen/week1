// function calcAge(currentYear, birthYear, month) {
//     return Math.abs(birthYear-currentYear)
// }
 
// const age = calcAge(2017, 1989)
// console.log("You are either", age, "or", age-1)


// function isEven (number) {
//     if (number % 2 == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }


// numbers = [10, 0, 9, 89, 2, 50]
// num = 10

// function isNumberInArr(arrOfNumbers, singleNumber) {
//     for (let i=0; i<arrOfNumbers.length; i++) {
//         if (singleNumber === arrOfNumbers[i]) {
//             return true
//         }
//     }
//     return false
// }

// console.log(isNumberInArr(numbers,num))


// let calculator = {
//     add: function(num1,num2) {
//         return (num1 + num2)
//     },
//     subtract: function(num1,num2) {
//         return (num1 - num2)
//     } 
// }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42



// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }


// function increaseByNameLength(money, name) {
//     return money * name.length
// }

// function makeRegal(name) {
//     name = "His Royal Highness, " + name
//     return name
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

Array.prototype.splice = function(startingIndex, amountToRemove, addedString = 0){
    let newArray = []
    for (let i=0; i<=this.length; i++){
        if (i==startingIndex) {
            if (amountToRemove != 0) {
                for (let j=0; j<i; j++) {
                    newArray[j] = this[j]
                }
                if (addedString) {
                    newArray.push(addedString)
                }
                for (let j=i+1; j<this.length; j++) {
                    newArray[j] = this[j]
                }
                return newArray
            }
            else {
                for (let j=0; j<i; j++) {
                    newArray[j] = this[j]
                }
                if (addedString) {
                    newArray.push(addedString)
                }
                for (let j=i; j<this.length; j++) {
                    newArray[j+1] = this[j]
                }
                return newArray
            }
        }
    }
}

array = ['Vicki', 'Shahar', 'Reut']
console.log(array.splice(0,1,'Shir'))