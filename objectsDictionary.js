const dictionary = {
    A: ["Aardvark", "Abacus", "Actually", "Atomic"],
    B: ["Banana", "Bonkers", "Brain", "Bump"],
    C: ["Callous", "Chain", "Coil", "Czech"]
}
let keys = Object.keys(dictionary)
let value 
for (let key in keys) {
    value = keys[key]
    console.log('Words that begin with', value, ':', dictionary[value])
}
