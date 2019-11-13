const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

//converts all words into lower cases and deletes all of the special characters from the text
const cleanText = function(text, chars) {
    for (let char of chars) {
        text = text.split(char).join(' ')
        text = text.toLowerCase()
    }
    return text
}

//returns an object, simplifying two lists of words and their counts into:
//[uniqueWord]: number
const getSummary = function(words,counters){
    let result = {}
    for (let i=0; i<words.length; i++) {
        result[i] = {
            [words[i]]: counters[i]
        }
    }
    return result
}

//headache! creates two different lists, while one holds the unique words and the second holds their counts,      respectively.
const countWords = function(text) {
    let cleanStory = cleanText(text, specialChars)
    let wordsSeperated = cleanStory.split(' ')
    let counter = 0
    let wordsToCount = []
    let wordsCounting = []
    for (let i=0; i<wordsSeperated.length; i++) {
        for (let j=i+1; j<wordsSeperated.length; j++) {
            if (wordsSeperated[i] == wordsSeperated[j]) {
               counter += 1
               wordsSeperated.splice(j,1)
            }
        }
        counter += 1
        wordsToCount.push(wordsSeperated[i]);
        wordsCounting.push(counter);
        counter = 0
    }
    return getSummary(wordsSeperated,wordsCounting)
}

console.log(countWords(story))