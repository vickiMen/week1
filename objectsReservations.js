const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
    noName: { claimed: true}
}
  
const name = prompt('Please enter the name for your reservation');
let nameLowerCase = name.toLowerCase()

if (nameLowerCase == 'bob') {
    if (reservations.Bob.claimed == false) {
        alert('Hi there Bob! Please have a sit')
    }
    else {
        alert('We\'re sorry, the reservation is already claimed')
    }
}
else if (nameLowerCase == 'ted') {
    if (reservations.Ted.claimed == false) {
            alert('Hi there Ted!')
    }
    else {
        alert('We\'re sorry, Ted, the reservation is already claimed')
    }
}
else {
    alert('We\'re sorry, there\'s no reservation under your name')
}