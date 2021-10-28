const buttonhover = document.getElementById("button").addEventListener("mouseover", hoverButton);
const buttonhoverout = document.getElementById("button").addEventListener("mouseout", hoverOutButton);

function hoverButton (){
    document.getElementById("button").style.backgroundColor = "#c62828";
}

function hoverOutButton (){
    document.getElementById("button").style.backgroundColor = "white";
}
