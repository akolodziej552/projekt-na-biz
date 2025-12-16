function copyTel() {
    navigator.clipboard.writeText("730379195");
    alert("Numer telefonu został skopiowany!");
}
const tel = document.querySelector("address");
tel.addEventListener("click",copyTel);