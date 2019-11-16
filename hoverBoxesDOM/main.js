const div = document.getElementById('container')
const numOfBoxes = 6

function randColor(){
    const colors = ['red', 'pink']/*, 'yellow', 'green', 'blue', 'black', 'purple', 'brown', 'orange', 'magenta', 'aqua', 'chartreuse', 'cyan', 'blueviolet', 'darkhaki']*/
    const randColor = colors[Math.floor(Math.random() * (colors.length))]
    return randColor
}


for (i=0; i<numOfBoxes; i++) {
    createBox(i,randColor())
}

function createBox(i,color) {
    const box = document.createElement('box')
    box.setAttribute('id', `box${i}`)
    box.setAttribute('name', 'box')
    box.setAttribute('style', 'margin-right: 1px; padding: 10px; border: 2px solid black; width: 50px; height: 50px; display: inline-block;')
    box.style.backgroundColor = color
    div.appendChild(box)
}

this.onmouseover = function(event) {
    if (event.target.nodeName == 'BOX'){
        let newColor = randColor()
        let currentColor = event.target.style.backgroundColor
        event.target.style.backgroundColor = newColor
        if (newColor == currentColor) {
            event.target.style.backgroundColor = randColor()
        }
        checkBoxes()
    }
}

let sameColors = false
let boxesArr = []

function checkBoxes(){
    for (i=0; i<numOfBoxes; i++){
        boxesArr.push(document.getElementById(`box${i}`).id)
    }
    
    for (i=0; i<numOfBoxes; i++){
        if (document.getElementById(`${boxesArr[i]}`).style.backgroundColor == document.getElementById(`${boxesArr[i+1]}`).style.backgroundColor){
            sameColors = true
        }
        else {
            sameColors = false
            break
        }
    }
    if (sameColors) {
        printMessage()
    }
} 

function printMessage() {
    const messageDiv = document.createElement('div')
    messageDiv.setAttribute('id', 'allColors')
    messageDiv.setAttribute('style', 'font-family: Avenir-medium; font-size: 20px; padding: 10px; margin-left: 5px; display: block')
    document.body.appendChild(messageDiv)
    document.getElementById('allColors').innerHTML = 'Nice Job!'
}


