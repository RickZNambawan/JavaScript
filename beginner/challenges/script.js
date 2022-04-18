paragraphs = document.querySelectorAll("p");
paragraphs.forEach(item => {
    if(item.innerText.includes("success")) {
        item.classList.add("success");
    } else if(item.innerText.includes("error")) {
        item.classList.add("error");
    } else {
        item.innerHTML = "";
        }
});

paragraphs.forEach(item => {
    console.log(item.classList);
});

const title = document.querySelector(".title");
title.classList.toggle("test");
title.classList.toggle("test");
