const board = document.querySelector('#board')
let squareTotalInRow = +prompt("Введите количество ячеек в строке от 30 до 40", 40);

if (!(squareTotalInRow > 29 && squareTotalInRow < 41)){
  alert("Вы ввели некорректное число ячеек. Поэтому устанавливаем 35");
  squareTotalInRow = 35;
}

console.log(squareTotalInRow);
const squareBackgroundMain = 'Magenta';

const squareSizeWMargin = squareTotalInRow * squareTotalInRow/100;
const squareTotal = squareTotalInRow * squareTotalInRow;
const squareMargin = squareSizeWMargin / 10;
const squareSize = squareSizeWMargin -(2 * squareMargin);

const boardMaxWidth = (squareTotalInRow * (squareSize + squareSize / 4));
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "orange",
  "purple",
  "Cyan",
  "Navy",
];
board.style.maxWidth = `${boardMaxWidth}px`;

for (let i = 0; i < squareTotal; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.backgroundColor = squareBackgroundMain;
  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;
  square.style.margin = `${squareMargin}px`;

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
  board.append(square);
}
function setColor(el) {
    const color = getRandomColor(); 
    el.style.backgroundColor = color
    el.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`;

}
function removeColor(el) {
    el.style.backgroundColor = 'black';
    el.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
}