// GET Request 

const url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url)
// .then(resp => resp.json())
// .then(posts => console.log(posts))

async function asyncFetch(api) {
    const resp  = await fetch(api);
    const posts = await resp.json(); 
    console.log(posts)
}



// POST Request

fetch(url, {
    method: "Post", 
    body: JSON.stringify({fakeData: 1}), 
    headers: {
        'Content-type' : "application/json"
    }
}).then(resp => resp.json())
  .then(data => console.log(data))