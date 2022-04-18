const getData = document.querySelector("#getData");
getData.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        data.forEach(user => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(resUser => resUser.json())
            .then(data2 => {
                data2.forEach(item => {
                    if(user.userId === item.id) {
                        const output = document.createElement("p");
                        const jsonOutput = `
                        User Id: ${item.name}
                        Post Id: ${user.id} 
                        Title: ${user.title} 
                        Body: ${user.body} 
                        `
                        output.innerText = jsonOutput;
                        document.body.appendChild(output);
                    }
                })
            })
        })
        console.log(data);
    })
});

const addPost = document.querySelector("#addPost");
addPost.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userId: '8',
            title: 'Ang Huling Tula na Isusulat Ko, Para Saiyo',
            body: 'lorem hahahhaaaaaaaaaaaahahahahahahahahahaha',
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
});