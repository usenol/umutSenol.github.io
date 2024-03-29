let currentLevel = 1;
let clickCount = 0;
let time = 500;

function game() {
    setTimeout(() => {
        newMarginTop = Math.random() * 300;
        newMarginLeft = Math.random() * 300;
        document.getElementById("Button").style.marginTop = newMarginTop + 'px';
        document.getElementById("Button").style.marginLeft = newMarginLeft + 'px';

        if (clickCount === 3) {
            alert(`You won ${currentLevel}. level! You can go to the ${currentLevel+1}. level.`);
            currentLevel++;
            clickCount = 0;
            if (time > 0) {
                time -= 100;
            } else {
                time = 0;
            }
        }
    }, time);
}

document.getElementById("Button").addEventListener("click", () => {
    clickCount++;
});