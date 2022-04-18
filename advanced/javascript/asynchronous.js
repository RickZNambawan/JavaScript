/* Asynchronous JavaScript and XML (AJAX) */
// the basics
const posts = [
    {
        title: 'Post 1',
        body: 'This is the body for post 1'
    },    
    {
        title: 'Post 2',
        body: 'This is the body for post 2'
    },
    {
        title: 'Post 3',
        body: 'This is the body for post 3'
    },
];

/* Callback */
var getPost = function() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li> ${post.title} </li>`;
            output += `<li> ${post.body} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

var createPost = function(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback(); 
        // needs to pass a callback because getPost took 1 sec before created a post
    }, 2000);
}

createPost({title: 'Post 3', body: 'This is the body for post 3'}, getPost);
createPost({title: 'Post 4', body: 'This is the body for post 4'}, getPost);

/* Promises */
var getPost = function() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li> ${post.title} </li>`;
            output += `<li> ${post.body} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

var createPost = function(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Something went wrong!');
            }

        }, 2000);
    });

}

createPost({title: 'Post 5', body: 'This is the body for post 5'})
.then(getPost).catch(error => console.log(error));

createPost({title: 'Post 6', body: 'This is the body for post 6'})
.then(getPost).catch(error => console.log(error));

// Promises.all
const promise1 = Promise.resolve('Hello, World!');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye!');
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    console.log(data);
});

Promise.all([promise1, promise2, promise3, promise4])
.then((values) => console.log(values));

/* Asynch / Await */
async function init() {
    await createPost({title: 'Post 5', body: 'This is the body for post 5'});
    getPost();
}

init();

// with Fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();

