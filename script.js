const gridContainer = document.getElementById('grid-container');
const buttonResize = document.getElementById('resize-button');
const maxTotalWidth = 560; 
const colors = [];

for (let i = 0; i < 10; i++) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colors.push(randomColor);
}


let gridSize = 16; 

function createGrid(size) {
  removeAllGridItems();


  const columnWidth = maxTotalWidth / size;

  gridContainer.style.gridTemplateColumns = `repeat(${size}, ${columnWidth}px)`;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    gridContainer.appendChild(div);
  }

  addMouseOverEventListeners();
}

function addMouseOverEventListeners() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        item.style.backgroundColor = randomColor;
    });
  });
}

function removeAllGridItems() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item) => {
    item.remove();
  });
}

buttonResize.addEventListener('click', () => {
  const userInput = window.prompt('Specify the number of squares per side (up to 100):');

  if (userInput !== null) {
    const newSize = parseInt(userInput);

    if (!isNaN(newSize) && newSize <= 100) {
      gridSize = newSize; 
      createGrid(gridSize);
    } else {
      console.log("Error: Enter a valid number, up to 100.");
    }
  } else {
    console.log("Error: The user canceled the operation.");
  }
});


createGrid(gridSize);
