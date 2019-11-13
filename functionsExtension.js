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