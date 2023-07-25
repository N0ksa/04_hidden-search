input = document.querySelector("input");
searchIcon = document.querySelector("button");


searchIcon.addEventListener("click", (e) => {
    input.classList.toggle("active");
    input.focus();
    searchIcon.classList.toggle("active");
    
})


console.log(searchIcon);