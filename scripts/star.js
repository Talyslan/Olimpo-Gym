const star = document.querySelectorAll(".star");

star.forEach(i => i.addEventListener("click", (e) => {
    if (e.target.getAttribute("src") === "./images/products/star/star.png")
        e.target.setAttribute("src", "./images/products/star/starFavorite.png");
    else 
        e.target.setAttribute("src", "./images/products/star/star.png");
}));