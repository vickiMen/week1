// const containerWidth = document.getElementById('container').style.width
const containerWidth = document.getElementById('playing-field').offsetWidth
const containerHeight = document.getElementById('playing-field').offsetHeight

const getContainerBorder = window.getComputedStyle(document.getElementById("playing-field"), null)
const containerBorder = parseInt(getContainerBorder.getPropertyValue("border-top"))

const ballWidth = document.getElementById('block').offsetWidth

const getContainerPadding = window.getComputedStyle(document.getElementById("playing-field"), null)
const containerPadding = parseInt(getContainerPadding.getPropertyValue("padding"))

const finalWidth = containerWidth - (2*containerBorder) - (2*containerPadding) - (ballWidth/2) - 15
const finalHeight = containerHeight - (2*containerBorder) - (2*containerPadding) - (ballWidth/2) - 15


const ball = document.getElementById('block')
const up = document.getElementById('up')
const down = document.getElementById('down')
const left = document.getElementById('left')
const right = document.getElementById('right')

document.getElementById("playing-field").style.position = 'relative' 
ball.style.position = 'absolute'

ball.style.top = 0
ball.style.bottom = 0
ball.style.left = 0
ball.style.right = 0


// const containerHeight = document.getElementById('container').style.height
// const containerWidth2 = document.getElementById('playing-field').style.width
// console.log('print1:', containerWidth2)
// const parsedWidth2 = parseInt(containerWidth2)

let rightValue
let leftValue
let upValue
let downValue

const moveRight = function(){
    leftValue = parseInt(ball.style.left)
    leftValue += 15
    rightValue = finalWidth - leftValue
    ball.style.left = leftValue + 'px'
    ball.style.right = rightValue + 'px'
    if (leftValue >= finalWidth) {
        ball.style.left = finalWidth + 'px'
    }
}

const moveLeft = function(){
    rightValue = parseInt(ball.style.right) || finalWidth
    rightValue += 15
    leftValue = finalWidth - rightValue
    ball.style.right = rightValue + 'px'
    ball.style.left = leftValue + 'px'
    if (rightValue >= finalWidth) {
        ball.style.right = finalWidth + 'px'
    }
}

const moveUp = function(){
    downValue = parseInt(ball.style.bottom) || finalHeight
    downValue += 15
    upValue = (finalHeight - downValue)
    ball.style.bottom = downValue + 'px'
    ball.style.top = upValue + 'px'
    if (downValue >= finalHeight) {
        ball.style.bottom = finalHeight + 'px'
    }
}   

const moveDown = function(){
    upValue = parseInt(ball.style.top)
    upValue += 15
    downValue = (finalHeight - upValue)
    ball.style.top = upValue + 'px'
    ball.style.bottom = downValue + 'px'
    if (upValue >= finalHeight) {
        ball.style.top = finalHeight + 'px'
    }
}



right.onclick = function() {
    moveRight()
}

left.onclick = function() {
    moveLeft()
}

up.onclick = function() {
    moveUp()
}

down.onclick = function() {
    moveDown()
}


// const subHeader = document.createElement('h2')
// subHeader.innerHTML = 'Go vegan!'
// subHeader.setAttribute('class', 'subHeader')
// subHeader.style.fontFamily = 'david'
// subHeader.style.color = 'red'
// subHeader.style.textShadow = '2px 2px blue'
// subHeader.style.fontSize = '100px'
// subHeader.style.position = 'relative'
// document.body.appendChild(subHeader)


function changeColor() {
    document.getElementById('playing-field').style.backgroundColor = '#8e44ad'
}


// const list = document.createElement('li')
// list.innerHTML = 'What is love?'
// list.style.color = 'purple'
// list.style.fontSize = '40px'
// list.style.position = 'relative'
// list.style.display = 'inline'
// list.setAttribute('onclick', 'addUlist()')
// document.body.appendChild(list)

// function addUlist() {
//     const Ulist = document.createElement('ul')
//     Ulist.innerHTML = 'baby don\'t hurt me'
//     Ulist.style.color = 'pink'
//     Ulist.style.fontSize = '40px'
//     Ulist.style.position = 'relative'
//     Ulist.style.display = 'inherit'
//     Ulist.setAttribute('onclick', 'addSubUlist()')
//     document.body.appendChild(Ulist)
// }

// function addSubUlist() {
//     const subUlist = document.createElement('ul')
//     subUlist.innerHTML = 'don\'t hurt me'
//     subUlist.style.fontSize = '40px'
//     subUlist.style.color = 'salmon'
//     subUlist.style.position = 'relative'
//     subUlist.style.display = 'inherit'
//     subUlist.setAttribute('onclick', 'addSubUlist()')
//     document.body.appendChild(subUlist)
// }


// subHeader.onclick = function () {
//     subHeader.innerHTML = "Yeahhhh"
//     subHeader.style.color = 'green'
// }

// subHeader.onmouseenter = function() {
//     subHeader.innerHTML = "I will destroy you!"
//     subHeader.style.color = "blue"
// }

// subHeader.onmouseout = function() {
//     subHeader.innerHTML = "Go Vegan!"
//     subHeader.style.color = "red"
// }