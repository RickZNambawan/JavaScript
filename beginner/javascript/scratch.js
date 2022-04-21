// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },

//     body: JSON.stringify({
//         name: "user1",
//         username: "RickZ",
//         email: "rickzisback@gmail.com",
//         phone: "09226767804",
//         website: "hellopo.com",
//         address: {
//             city: "Pasig",
//             street: "Magsaysay",
//             zipcode: "1611",
//         }
//     })
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(_error => console.log("Error!")) 


// const loginUser = (email, pass) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Now we have the data');
//             resolve({userEmail: email});
//         }, 1000);
//     });
// }

// const getUserVideos = (email) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Getting Video Success!")
//             resolve(['video1', 'video2', 'video3']);
//         }, 1000);
//     });
// }

// const videoDetails = (video) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Here the title of the video")
//             resolve('title of the video');
//         }, 1000);
//     });
// }

// const yt = new Promise((resolve, _reject) => {
//     setTimeout(() => {
//         resolve("gett stuff from yt");
//     }, 2000);
// });

// const getUsers = async function() {
//     const responses = await Promise.all([
//         await loginUser('fred', 'rickz'),
//         await getUserVideos([0].email),
//         await videoDetails([1][0]),
//         await yt
//     ])
    
//     return responses;
// }

// getUsers().then(data => data.forEach(item => console.log(item)));

//     // .then(data => {
//     //     console.log(data); 
//     // })
//     // .catch(err => console.log('rejected', err.message));

// console.log("haha");

let count = 0;
function cc(card) {
  if(card <= 6) {
    count++;
  } else if(card >= 7 && card <= 9) {
    let answer;
} else {
    count--;
  }
    
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

// cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(7)); console.log(cc(8)); console.log(cc(9)); 
// console.log(cc(2)); console.log(cc('J')); console.log(cc(9)); console.log(cc(2)); console.log(cc(7));
// console.log(cc(2)); console.log(cc(2)); console.log(cc(10)); 
