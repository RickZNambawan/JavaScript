/* Document Object Model (DOM) */

/* querySelector */
// select element
const paragraph = document.querySelector("p");
console.log(paragraph);

// select element with class name
const firstError = document.querySelector(".error");
console.log(firstError);

// select specific element with class
const secondError = document.querySelector("div.error");
console.log(secondError);

// querySelectorAll
// select all elements with same tags (it will store as array)
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs[0]);
paragraphs.forEach(text => console.log(text));

// select all elements with same class name
const errors = document.querySelectorAll(".error");
console.log(errors[1]);

/* getElement */
// getElementsByTagName();
const table = document.getElementsByTagName("li");
console.log(table[2]);

// getElementById
const title = document.getElementById("page-title");
console.log(title);

// getElementByClassName
// cannot use forEach() method
const sampleClass = document.getElementsByClassName("sample-class");
console.log(sampleClass[0]);

/* access element */
// innerText
console.log(paragraph.innerText);
paragraph.innerText = "Frederick Mapagmahal";
console.log(paragraph.innerText.toUpperCase());

paragraphs.forEach((item) => {
    item.innerText += " : NEW TEXT!";
    console.log(item.innerText);
});

/* modifying html element */
// innerHTML
title.innerHTML = "<h1> Javascript <i> Tutorial </i> </h1>";
console.log(title.innerHTML);

// add html to the file with arrays
const navBarList = ["Home", "About", "Contact Us", "Gallery", "Accounts"];
const navBar = document.querySelector(".navBar");
navBarList.forEach(item => navBar.innerHTML += `<li> ${item} </li>`)

const navBarLi = document.querySelectorAll(".navBar");
navBarLi.forEach(item => console.log(item.innerText));

/* get and set attribute of html tag */
// getAttribute
const link = document.querySelector(".link > a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "www.youtube.com");
console.log(link.getAttribute("href"));
link.innerHTML = "<h2> My Youtube Channel </h2>";

// setAttribute - modify the value of attribute
const message = document.querySelector(".some-error");
console.log(message.getAttribute("class"));
message.setAttribute("class", "another-error");

// setAttribute - make another attribute and set a value
message.setAttribute("style", "color: red");
console.log(message.getAttribute("class"));

// style property
message.style.color = "orange";
message.style.border = "solid 2px red";
message.style.fontSize = "50px";

// add or remove classes in html using js w/ css
const simpleText = document.querySelector(".text p");
console.log(simpleText.classList);
simpleText.classList.add("simple-text");
simpleText.classList.add("not-simple-text");
simpleText.classList.remove("not-simple-text");

// toggle on and toggle off / add or remove class
simpleText.classList.toggle("test");
simpleText.classList.toggle("test");


/* Create element and append to html */
const anotherLink = document.querySelector(".link"); // parent element
const buttonLink = document.createElement("button"); 
buttonLink.setAttribute("id", "button-link");
buttonLink.innerText = " CLICK THE LINK HERE!";
anotherLink.appendChild(buttonLink);

/* Traversing DOM */
// get the parent element
console.log(buttonLink.parentElement);

// method chaining - to get the parent element of the parent element
console.log(buttonLink.parentElement.parentElement)

// get the child elements of the element
console.log(anotherLink.children); 

// get the next sibling element of the element
console.log(anotherLink.nextElementSibling)

/* addEventListener */
buttonLink.addEventListener("click", event => {
    if(event.shiftKey === true) {
        console.log("You've pressed shift key while clicking the button!");
    } else {
        console.log("Congrats on clicking this button!");
    }
})

// do something when event trigger (delete button)
const ytlink = document.querySelector(".link a");
console.log(ytlink);
ytlink.addEventListener("click", event => {
    event.preventDefault(); // prevent the default behaviour of <a> tag
    // const currentEl = event.target.parentElement;
    // const parentEl = currentEl.parentElement; 
    // const targetEl = currentEl.nextElementSibling;
    // console.log(parentEl);
    // console.log(currentEl);
    // console.log(targetEl);
    // console.log(event.target);
    // parentEl.removeChild(targetEl);

// event bubbling - best way to trigger the target listener
    try {
        if(ytlink.nextElementSibling.getAttribute("id") === "button-link") {
            const parentEl = event.target.parentElement.parentElement;
            parentEl.removeChild(ytlink.nextElementSibling);
        }
    } catch (error) {
        console.log("Already Deleted!");
    }
});

// 'change' event
const hideBtn = document.querySelector("#checkbox-hide");
hideBtn.addEventListener("change", event => {
    const hideError = document.querySelector(".another-error");
    if(hideBtn.checked) {
        hideError.style.display = "none";
    } else {
        hideError.style.display = "block";
    }
})

// 'keyup' event
const searchBar = document.querySelector("#searchBox");
const menuBar = document.querySelectorAll(".navBar li")

searchBar.addEventListener('keyup', event => {
    const keystroke = event.target.value;
    console.log(keystroke);
    menuBar.forEach(item => {
        const title = item.innerText.toLowerCase();
        if(title.includes(keystroke)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}); 


