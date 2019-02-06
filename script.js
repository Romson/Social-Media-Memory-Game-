// Memory game

let pairs_array = [];
let gameCompleted = 0;

tdGrid();

// Id td Grid add to cell
function tdGrid() {
    let grid = document.getElementsByTagName("td");

    for(let i = 0; i < grid.length; i++) {
        let cell = grid[i];

        cell.addEventListener('click', () => {     
            cell.innerHTML = randomImage();     
            cell.style.background = "white";
            pairs_array.push(cell.innerHTML);

            // Change bgColor if pair found
            if (pairs_array.length == 2) {
                if(pairs_array[0] != pairs_array[1]) {
                    cell.style.backgroundColor = "red"; 
                    cell.innerHTML = "";
                }
                else if(pairs_array[0] == pairs_array[1]) {
                    cell.style.backgroundColor = "purple";
                    pairs_array = [];
                }
            } 
        });
    }
}

// Random image
function randomImage() {
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