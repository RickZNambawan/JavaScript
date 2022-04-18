const deletebtns = document.querySelectorAll("#book-list ul");
deletebtns.forEach(button => {
    button.addEventListener("click", event => {
        const target = event.target.parentElement; //parent element (li)
        button.removeChild(target);
    })
})

const addBook = document.forms["add-book"];
addBook.addEventListener("submit", event => {
    event.preventDefault();
    const textBox = document.querySelector("#text-box");
    const parentEl = document.querySelector("#book-list ul");
 
    const createLi = document.createElement("li");
    const createSpan = document.createElement("span");
    const createButton = document.createElement("span");

    createSpan.setAttribute("class", "name");
    createSpan.innerText = textBox.value;
    createButton.setAttribute("class", "delete")
    createButton.innerHTML = "delete";

    createLi.appendChild(createSpan);
    createLi.appendChild(createButton);
    parentEl.appendChild(createLi);

    textBox.value = "";
})

const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", event => {
    console.log(event);
    const books = document.querySelector("#book-list ul");
    if(hideBox.checked === true) {
        books.style.display = "none";
    } else {
        books.style.display = "initial";
    }
})


const searchBooks = document.forms["search-books"].querySelector("input");
const books = document.querySelectorAll("#book-list ul li");
searchBooks.addEventListener('keyup', event => {
    const term = event.target.value.toLowerCase();
    console.log(term);

    books.forEach(item => {
        const title = item.children[0].innerText.toLowerCase();
        if(title.includes(term)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
})