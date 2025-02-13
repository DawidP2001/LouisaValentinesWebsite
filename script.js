function yes(){
    container = document.getElementById("container");
    container.style.display = "none";
    yesElement = document.getElementById("yesContainer");
    yesElement.style.display = "block"
}
function no(){
    container = document.getElementById("container");
    container.style.display = "none";
    noElement = document.getElementById("noContainer");
    noElement.style.display = "block"
}
function back(){
    container = document.getElementById("container");
    container.style.display = "flex";
    yesElement = document.getElementById("yesContainer");
    yesElement.style.display = "none"
    noElement = document.getElementById("noContainer");
    noElement.style.display = "none"
}