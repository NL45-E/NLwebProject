function randomBlocks() {
    // declaration
    const idBlocks = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
    let rand = Math.floor(Math.random() * idBlocks.length);//randomize
    let selectedBlock = document.getElementById(idBlocks[rand]);
    selectedBlock.style.backgroundColor = "rgba(160, 31, 57, 0.37)";
    selectedBlock.style.color = "#0b2a2a";
    selectedBlock.style.padding = "6px"
    setTimeout(() => {
        selectedBlock.style.backgroundColor = "rgba(127, 255, 212, 0.334)";
        selectedBlock.style.color = "rgb(49, 47, 47)";
        selectedBlock.style.padding = "3px"
    }, 1500)
}