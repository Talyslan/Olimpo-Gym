const btnCalculate = document.querySelector("#calculate");
const result = document.querySelector("#result");
// ranges
let age = document.querySelector("#age");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

const atualizeValues = () => {
    age = parseInt(document.querySelector("#age").value);
    height = parseInt(document.querySelector("#height").value);
    weight = parseInt(document.querySelector("#weight").value);
}
// changes values changes interface
const heightChange = document.querySelector("#heightChange");
const weightChange = document.querySelector("#weightChange");
const ageChange = document.querySelector("#ageChange");

age.addEventListener("input", () => {atualizeValues(); ageChange.innerHTML = age})
height.addEventListener("input", () => {atualizeValues();heightChange.innerHTML = height})
weight.addEventListener("input", () => {atualizeValues();weightChange.innerHTML = weight})

const calculate = () => {
    atualizeValues();
    height = height / 100;
    
    let imc = (weight / (height * height)).toFixed(2);
    
    result.innerHTML = imc;
};

btnCalculate.addEventListener("click", calculate);

// sexo select
const masc = document.querySelector(".btnMasc");
const fem = document.querySelector(".btnFem");

masc.addEventListener("click", () => {
    if (!masc.classList.contains("select")) {
        masc.classList.add("select");
        fem.classList.remove("select");
    }
})

fem.addEventListener("click", () => {
    if (!fem.classList.contains("select")) {
        fem.classList.add("select");
        masc.classList.remove("select");
    }
})