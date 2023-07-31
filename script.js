let divRef = document.querySelector("#aqua");

let buttonRef = document.getElementById("aqua");

buttonRef.onclick = function() {
    buttonRef.style.backgroundColor = "aqua";

    if (divRef.style.backgroundColor == "aqua") {
        divRef.style.backgroundColor = "aqua";
    }

}

//toggling display//
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