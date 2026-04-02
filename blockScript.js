function randomBlocks(delay, className) {
    // declaration
    const idBlocks = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
    let rand = Math.floor(Math.random() * idBlocks.length);//randomize
    let selectedBlock = document.getElementById(idBlocks[rand]);
    //change
        selectedBlock.classList.add(`${className}`);
    setTimeout(() => {
        //reset style
        selectedBlock.classList.remove(`${className}`);
    }, delay)
}
function strobo() {
    for (let i = 0; i <= 18; i++) {
        setTimeout(() => {
           if (i !== 18) {
             randomBlocks(700, 'selected');
           } else {randomBlocks(2500, 'red')}
        }, i * 300)
    }
}