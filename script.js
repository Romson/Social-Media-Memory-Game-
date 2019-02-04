tdGrid();

function tdGrid() {
    let grid = document.getElementsByTagName("td");

    for(let i = 0; i < grid.length; i++) {
        let cell = grid[i];

        cell.addEventListener('click', () => {     
            cell.innerHTML = randomImages();     
            cell.style.background = "white"; 
        
            console.log('Clicked');
        });
    }
}

function randomImages() {
    let imgArr = [
        "<img src='images/facebook.png' class='center'>", 
        "<img src='images/facebook.png' class='center'>",
        "<img src='images/twitter.png' class='center'>",
        "<img src='images/twitter.png' class='center'>",
        "<img src='images/snapchat.png' class='center'>",
        "<img src='images/snapchat.png' class='center'>",
        "<img src='images/linkedin.png' class='center'>",
        "<img src='images/linkedin.png' class='center'>",
        "<img src='images/youtube.png' class='center'>",
        "<img src='images/youtube.png' class='center'>",
        "<img src='images/instagram.png' class='center'>",
        "<img src='images/instagram.png' class='center'>"];

    let random  = imgArr[Math.floor(Math.random() * (imgArr.length - 1))];
    return random;
}