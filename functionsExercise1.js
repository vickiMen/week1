const greet = function(name, timeOfDay){
    console.log("Good " + timeOfDay + ", " + name)
  }
 
  let date = new Date()
  let hour = date.getHours()
  let time
  let name = 'Vicki'

  if (hour < 12) {
    time = 'morning'
  }
  else if (hour >=12 && hour < 17) {
    time = 'noon'
  }
  else {
    time = 'evening'
  }
 

  greet(name, time)

const createUser = function(name, age){
   const user = {name: name, age: age}
   return user
 }
 
let names = ['Vicki', 'Shahar', 'Reut']
let ages = [28, 30, 32]

const growOld = function(user){
   user.age++
 }

let users = []


for (let i=0; i<names.length; i++) {
   users.push(createUser(names[i], ages[i]))
   growOld(users[i])
}

console.log(users)