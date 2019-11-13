people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
]

const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
}

const getAge = function(age) {
    if (age < 21) {
        return 'an underage '
    }
    else if (age <= 55) {
        return (age, 'year old ')
    }
    else {
        return 'a 55+ '
    }
}

const seperateWordsAndCapitalize = function(str) {
    let capitalizedWord = ''
    if (/\s/.test(str)) {
        let words = str.split(' ')
        for (let i=0; i<words.length; i++) {
            capitalizedWord += capitalize(words[i])
            // capitalizedWord += words[i][0].toUpperCase()
            // capitalizedWord += words[i].slice(1)
            capitalizedWord += ' '
        }
        return capitalizedWord
    }
    capitalizedWord += capitalize(str)
    // capitalizedWord += str[0].toUpperCase()
    // capitalizedWord += str.slice(1)
    return capitalizedWord
}

const getProfession = function(profession) {
    return seperateWordsAndCapitalize(profession)
}

const getLivingDetails = function(city, country) {
    city = seperateWordsAndCapitalize(city)
    country = seperateWordsAndCapitalize(country)
    return `${city}, ${country}. `
}

const catchPhrase = function(sentence) {
    return seperateWordsAndCapitalize(sentence)
}

const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)}`
    summary += getProfession(person.profession)
    summary += `from ${getLivingDetails(person.city, person.country)}`
    summary += `${capitalize(person.name)} loves to say \"${catchPhrase(person.catchphrase)}\".`
    return summary
}

console.log(getSummary(people_info[1]))