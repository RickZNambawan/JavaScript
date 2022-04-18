/* Higher Order Function: Filter, Map, Reduce, forEach */

/* forEach - loop through the list */
// first approach
const blog = (title, likes) => {console.log(title, likes)};
blogs.forEach(blog);

// second approach
blogs.forEach((title, likes) => console.log(title, likes));

/* Filter - you want to get specific item in array */
const firstBlogs = blogs.filter(blog => {
    return blog.title === "Youtube Tutorials";
});
console.log("First Blog: ", firstBlogs);

/* Map - return a list of array of values you want to get */
const secondBlogs = blogs.map(blog => {
    return blog.title;
});
console.log("Second Blog: ", secondBlogs);

/* Reduce - reduce to a single value */
const thirdBlogs = blogs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.likes;
}, 10);
console.log(thirdBlogs);