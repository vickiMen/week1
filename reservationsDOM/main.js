const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
    noName: { claimed: true}
}

const newDiv = document.createElement('div')
document.body.appendChild(newDiv)

function checkReservation() {
    let name = document.getElementById('nameInput').value
    let nameLowerCase = name.toLowerCase()
    if (nameLowerCase == 'bob') {
        if (reservations.Bob.claimed == false) {
            newDiv.innerHTML = '\nWelcome, Bob!'
        }
        else {
            newDiv.innerHTML = '\nWe\'re sorry, Bob, the reservation is already claimed'
        }
    }
    else if (nameLowerCase == 'ted') {
        if (reservations.Ted.claimed == false) {
            newDiv.innerHTML = '\nWelcome, Ted!'
        }
        else {
            newDiv.innerHTML = 'We\'re sorry, Ted, the reservation is already claimed'
        }
    }
    else {
        newDiv.innerHTML = '\nWe\'re sorry, there\'s no reservation under your name'
    }
}