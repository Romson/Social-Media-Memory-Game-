// Memory game

let pairs_array = [];

tdGrid();

function tdGrid() {
    // Select td and add to cell
    let grid = document.getElementsByTagName("td");
    let cellClicked = randomImage();

    for(let i = 0; i < grid.length; i++) {
        let cell = grid[i];

        for(let i = 0; i < cellClicked.length; i++) {
            let cell = cellClicked[i];
        }

        // Random image when clicked
        cell.addEventListener('click', () => {    
            cell.style.background = "white";
            cell.innerHTML = cellClicked[i];
            pairs_array.push(cell.innerHTML);

            // Match found
            if(pairs_array[0] == pairs_array[1]) {
                console.log("Match");
            } 
            else if(pairs_array[0] != pairs_array[1]) {
                console.log("Try again!")
            }

            // if (pairs_array.length == 2) {
            //     pairs_array = [];
            // }
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

    imgArr.sort(function(){
        return .5 - Math.random();
    });

    return imgArr;
}