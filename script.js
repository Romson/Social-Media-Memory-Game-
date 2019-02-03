// let tdBlock = document.getElementsByClassName("tdOne");

// document.getElementById("tdOne").innerHTML = "";


// <img src=""">

let imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix;

imgOne      = "<img src='images/facebook.png' class='center'>";
imgTwo      = "<img src='images/twitter.png' class='center'>";
imgThree    = "<img src='images/snapchat.png' class='center'>";
imgFour     = "<img src='images/linkedin.png' class='center'>";
imgFive     = "<img src='images/youtube.png' class='center'>";
imgSix      = "<img src='images/instagram.png' class='center'>";

tdOne.addEventListener('click', () => {
    tdOne.innerHTML = imgOne;
    tdOne.style.background = "white";
});

tdTwo.addEventListener('click', () => {
    tdTwo.innerHTML = imgTwo;
    tdTwo.style.background = "white";
});

tdThree.addEventListener('click', () => {
    tdThree.innerHTML = imgThree;
    tdThree.style.background = "white";
});

tdFour.addEventListener('click', () => {
    tdFour.innerHTML = imgFour;
    tdFour.style.background = "white";
});

tdFive.addEventListener('click', () => {
    tdFive.innerHTML = imgFive;
    tdFive.style.background = "white";
});

tdSix.addEventListener('click', () => {
    tdSix.innerHTML = imgSix;
    tdSix.style.background = "white";
});