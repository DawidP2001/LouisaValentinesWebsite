function yes(){
    container = document.getElementById("container");
    container.style.display = "none";
    yesElement = document.getElementById("yesContainer");
    yesElement.removeAttribute("hidden");
}
function no(){
    container = document.getElementById("container");
    container.style.display = "none";
    yesElement = document.getElementById("noContainer");
    yesElement.removeAttribute("hidden");
}