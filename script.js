// Memory game

let pairs_array = [];
let pairCompleted = 0;

tdGrid();

// Id td Grid add to cell
function tdGrid() {
    let grid = document.getElementsByTagName("td");
    let cellClicked = randomImage();

    for(let i = 0; i < grid.length; i++) {
        let cell = grid[i];

    for(let i = 0; i < cellClicked.length; i++) {
        let cell = cellClicked[i];
    }

        // Check for clicks
        cell.addEventListener('click', () => {    
            cell.style.background = "white";
            cell.innerHTML = cellClicked[i];
            pairs_array.push(cell.innerHTML);

            if(pairs_array[0] != pairs_array[1]) {
                hideImage(pairs_array[0]);
                hideImage(pairs_array[1]);
            }
            
            if(pairs_array[0] == pairs_array[1]) {
                complete(pairs_array[0]);
                complete(pairs_array[1]);
            }

            if (pairs_array.length == 2) {
                pairs_array = [];
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

    imgArr.sort(function(){
        return .5 - Math.random();
    });

    return imgArr;
}

function hideImage(cell){
    cell.style.background = "blue";
    cell.innerHTML = "";
    cell.clicked = false;
}

function newPair(cell){
    pairCompleted++;
    cell.completed = true;
    cell.style.background = "purple";
}