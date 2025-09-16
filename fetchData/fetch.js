const loadData = () => {

    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => loadPostss(data))  
}


const loadPostss = (data) => {
    console.log(data)
}


const loadPost = () => {
    const url = ('https://jsonplaceholder.typicode.com/posts')
    fetch(url)
    .then(response => response.json())
    .then(data => displayPost(data))
}




const displayPost = (posts) => {
    posts.forEach(post => console.log(`${post.id} : ${post.title}`))
}