/* Asynchronous JavaScript and XML (AJAX) */

// Synchronous Code (JS)
// Run process one at a time

// Asynchronous Code (JS)
// Start something now, and finish it later

// needs to study
// * event loop
// * call stack
// * threading
// * how to make api (by the use of Node.js)

/* HTTP Requests */ 
// make requests to get data from another server or database
// make these request to API endpoints

/* HTTP Request Methods */
// POST, GET, PUT, PATCH, DELETE. Counterpart of CRUD
// CREATE, READ, UPDATE, DELETE (CRUD)

/* API endpoints */ 
// like urls that a particular api or server exposes to us
// The URL for a server or a service and operates through responses and requests

/* JSON */ 
// API will give data in JSON format which looks like javascript's object

/* Status Code */
// 100 - information responses
// 200 - everything is okay with the request, then comeback the data
// 300 - redirection message
// 400 - cannot find the resources because it doesn't exist (client fault)
// 500 - server error not our fault

/* Practice api */
// fetch('https://jsonplaceholder.typicode.com/users')

/* Old Way of HTTP Request */
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    /* Ready States */
    // 0 - Created but open not yet called, 
    // 1 - open() has been called 
    // 2 - send() has been called, and headers and status are available.
    // 3 - Downloading; responseText holds partial data
    // 4 - The Operation is Complete (Done) 
    if(request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    } else if(request.readyState === 4) {
        console.log('could not fetch the data');
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/users'); 
request.send();

/* Callback Function */
var getUsers = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if(request.readyState === 4) {
            callback("could not fetch the data", undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/users'); 
    request.send();
};

console.log(1);
console.log(2);

getUsers((err, data) => {
    if(data) {
        console.log(data);
    } else {
        console.log(err);
    }
});

console.log(3);
console.log(4);

/* Request data from own JSON  */
// creating JSON file
// JSON.parse() - turns JSON string into an object
// JSON.stringify() - turns object into a string to make it as JSON

var getUsers = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText) // turns json into objects
            callback(undefined, data);
        } else if(request.readyState === 4) {
            callback("could not fetch the data", undefined);
        }
    });

    request.open('GET', '../createJSON.json'); 
    request.send();
};

getUsers((err, data) => {
    if(data) {
        console.log(data);
    } else {
        console.log(err);
    }
});

/* Callback Hell */
var getUsers = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText) // turns json into objects
            callback(undefined, data);
        } else if(request.readyState === 4) {
            callback("could not fetch the data", undefined);
        }
    });

    request.open('GET', resource); 
    request.send();
};

getUsers('../usersResource/christian.json', (err, data) => {
    console.log("promises 1 resolved: ", data);
    getUsers('../usersResource/fred.json', (err, data) => {
        console.log("promises 2 resolved: ", data);
        getUsers('../usersResource/marian.json', (err, data) => {
            console.log("promises 3 resolved: ", data);
        });
    });
});

// /* Promises */
var getUsers = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText) // turns json into objects
                resolve(data);
            } else if(request.readyState === 4) {
                reject("could not fetch the data");
            }
        });

        request.open('GET', resource); 
        request.send();
    })
};

getUsers('../usersResource/fred.json')
    .then(data => console.log("promises resolved: ", data))
    .catch(err => console.log("promises rejected: ", err));

/* Promises Chaining */
// if you want to wait one by one to request data

var getUsers = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText) // turns json into objects
                resolve(data);
            } else if(request.readyState === 4) {
                reject("could not fetch the data");
            }
        });
    
        request.open('GET', resource); 
        request.send();
    })
};
    
getUsers('../usersResource/christian.json')
    .then(data => {
        console.log("promises 1 resolved: ", data);
        return getUsers('../usersResource/fred.json');
    })
    .then(data => {
        console.log("promises 2 resolved: ", data);
        return getUsers('../usersResource/marian.json');
    })
    .then(data => {
        console.log("promises 3 resolved: ", data);
    })
    .catch(err => console.log("promises rejected: ", err));

/* Fetch API */
// newer way to make HTTP Request
// working Older way of http request and Promises in the background

var getUsers = fetch('../usersResource/christian.json')
    .then(response => response.json())
    .then(data => {
        console.log("promises 1 resolved: ", data)
        return fetch('../usersResource/fred.json')
    })
    .then(response => response.json())
    .then(data => {
        console.log("promises 2 resolved: ", data)
        return fetch('../usersResource/marian.json')
    })
    .then(response => response.json())
    .then(data => {
        console.log("promises 3 resolved: ", data)
    })
    .catch(error => console.log(error));

/* Async & Await */

var getUsers = async() => {
    let response1 = await fetch('../usersResource/christian.json');
    let response2 = await fetch('../usersResource/fred.json');
    let response3 = await fetch('../usersResource/marian.json');
    const responses = await Promise.all([
        response1.json(), 
        response2.json(), 
        response3.json()
    ]);

    return responses;
}

getUsers()
    .then(data => {
        data.forEach((item, index) => console.log(`promises ${index+1} resolved: `, item)) 
    })
    .catch(err => console.log('rejected', err.message));

/* Async & Await & Promise.all */
var getUsers = async() => {
    const responses = await Promise.all([
        fetch('../usersResource/christian.json'),
        fetch('../usersResource/fred.json'),
        fetch('../usersResource/marian.json')
    ]);
        
    const results = await Promise.all(responses.map(result => result.json()));
    return results;
}
    
getUsers()
    .then(data => {
        data.forEach((item, index) => console.log(`promises ${index+1} resolved: `, item)) 
    })
    .catch(err => console.log('rejected', err.message));