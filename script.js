let divRef = document.querySelector("#color-display");

document.getElementById("aqua").onclick = function() {
    divRef.style.backgroundColor = "aqua";
    divRef.innerHTML = "aqua";

}

document.getElementById("teal").onclick = function()  {
    divRef.style.backgroundColor = "teal";
    divRef.innerHTML = "teal";
}

document.getElementById("pink").onclick = function()  {
    divRef.style.backgroundColor = "pink";
    divRef.innerHTML = "pink";
}

document.getElementById("purple").onclick = function()  {
    divRef.style.backgroundColor = "purple";
    divRef.innerHTML = "purple";
}

document.getElementById("colorless").onclick = function()  {
    divRef.style.backgroundColor = "white";
    divRef.innerHTML = "white";
}

let displayButton = document.getElementById("display-btn");

displayButton.onclick = function(){
    if (divRef.style.display != "none") {
      divRef.style.display ="none";

      displayButton.innerHTML = "Show"
    } else {
        divRef.style.display="block";

        displayButton.innerHTML ="Hide";
    }

}