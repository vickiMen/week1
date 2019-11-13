const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
]  

let badText = 'This is the worst. DON\'T BUY!' 
let id = 3
let comment

for (let i=0; i<posts.length; i++) {
    if (posts[i].text == badText) {
        comment = posts[i].comments
        for (let j=0; j<comment.length; j++) {
            if (j == id-1) {
                comment.splice(j,1)
            }
        }
    }
}

console.log(posts)