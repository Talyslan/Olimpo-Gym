const img = document.querySelector("#imgPassword");
const input = document.querySelector("#password");

const seePassword = () => {
    if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
        img.setAttribute("src", "../../images/input/HiddenPassword.png");
    }
    else {
        input.setAttribute("type", "password");
        img.setAttribute("src", "../../images/input/VisiblePassword.png");
    } 
}

img.addEventListener("click", seePassword);