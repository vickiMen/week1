const containerWidth = document.getElementById('playing-field').offsetWidth
const containerHeight = document.getElementById('playing-field').offsetHeight

const getContainerBorder = window.getComputedStyle(document.getElementById("playing-field"), null)
const containerBorder = parseInt(getContainerBorder.getPropertyValue("border-top"))

const ballWidth = document.getElementById('block').offsetWidth

const getContainerPadding = window.getComputedStyle(document.getElementById("playing-field"), null)
const containerPadding = parseInt(getContainerPadding.getPropertyValue("padding"))

const finalWidth = containerWidth - (2*containerBorder) - (2*containerPadding) - (ballWidth/2) - 10
const finalHeight = containerHeight - (2*containerBorder) - (2*containerPadding) - (ballWidth/2) - 10


const ball = document.getElementById('block')

document.getElementById("playing-field").style.position = 'relative' 
ball.style.position = 'absolute'

ball.style.top = '0px'
ball.style.bottom = '0px'
ball.style.left = '0px'
ball.style.right = '0px'

let left
let top2
let right
let bottom


const moveUp = function(){
    bottom = parseInt(ball.style.bottom)
    top2 = parseInt(ball.style.top)
    left = parseInt(ball.style.left)
    if (left == 0 && top2 == 0) {
        ball.style.left = '0px'
        ball.style.bottom = '0px'
        return
    }
    if (bottom == finalHeight && top2 == 0) {
        ball.style.bottom += 'px'
        ball.style.top += 'px'
        return
    }
    bottom += 15
    top2 = (finalHeight - bottom)
    ball.style.bottom = bottom + 'px'
    ball.style.top = top2 + 'px'
}

const moveLeft = function(){
    right = parseInt(ball.style.right)
    left = parseInt(ball.style.left)
    top2 = parseInt(ball.style.top)
    if (left == 0 && top2 == 0) {
        ball.style.left = '0px'
        ball.style.bottom = '0px'
        return
    }
    if (left == 0) {
        ball.style.right += 'px'
        return
    }
    right += 15
    left = finalWidth - right
    ball.style.right = right + 'px'
    ball.style.left = left + 'px'
}
    
const moveRight = function(){
    left = parseInt(ball.style.left)
    right = parseInt(ball.style.right)
    if (right == 0 && left == finalWidth) {
        ball.style.right += 'px'
        ball.style.left += 'px'
        return
    }
    left += 15
    right = finalWidth - left
    ball.style.left = left + 'px'
    ball.style.right = right + 'px'
}

const moveDown = function(){
    top2 = parseInt(ball.style.top)
    bottom = parseInt(ball.style.bottom)
    if (top2 == finalHeight && bottom == 0) {
        ball.style.bottom += 'px'
        ball.style.top += 'px'
        return
    }
    top2 += 15
    bottom = (finalHeight - top2)
    ball.style.top = top2 + 'px'
    ball.style.bottom = bottom + 'px'
}


document.getElementById('right').onclick = function() {
    moveRight()
}

document.getElementById('left').onclick = function() {
    moveLeft()
}

document.getElementById('up').onclick = function() {
    moveUp()
}

document.getElementById('down').onclick = function() {
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

this.onkeydown = checkKey

function checkKey(event) {
    if (event.keyCode == '38') {
        moveUp()
    }
    else if (event.keyCode == '40') {
        moveDown()
    }
    else if (event.keyCode == '37') {
       moveLeft()
    }
    else if (event.keyCode == '39') {
       moveRight()
    }

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