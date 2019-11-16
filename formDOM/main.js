const form = {
    name: '',
    desiredsalary: '',
    birthday: '',
    phone: ''
}

this.onchange = function(event) {
    const id = event.target.id.toLowerCase()
    const newValue = event.target.value
    document.getElementById(id).setAttribute('value', newValue)
    form[id] = newValue
}


function validate(){
    let errorsArr = []
    let formKeys = Object.keys(form)
    let missingProperties = []
    for (key of formKeys) {
        if (form[key] == '') {
            missingProperties.push(key)
        }
    }
    if (missingProperties.length > 1) {
        let errorMessage = '<br>missing values: '
        for(property of missingProperties){
            errorMessage += property
            errorMessage += ', '
        }
        errorsArr.push(errorMessage)
    }
    else if (missingProperties.length == 1){
        errorsArr.push(`<br>${missingProperties[0]} is missing`)
    }
    if (0 < form.name.length && form.name.length <= 2) {
        errorsArr.push('<br>Name must be longer than 2 characters')
    }
    if ((form.desiredsalary < '10000' && form.desiredsalary != '') || form.desiredsalary > '16000') {
        errorsArr.push('<br>Salary must be greater than 10,000 but less than 16,000')
    }
    if (form.phone.length < 10 && form.phone.length != '') {
        errorsArr.push('<br>Phone must be 10 digits long')
    }
    if (errorsArr.length > 0){
        printError(errorsArr)
    }
}   

function printError(errorMessage){
    for (i=0; i<errorMessage.length; i++){
        const error = document.createElement(`div${i}`)
        error.setAttribute('id', `errorMessage${i}`)
        error.setAttribute('style', 'display: flex-block')
        document.getElementById('section3').appendChild(error)
        document.getElementById(`errorMessage${i}`).innerHTML = `${errorMessage[i]}`
    }
}