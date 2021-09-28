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

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);
  board.append(square);
}
function setColor(e)  {
  const el = e.target;
   const getColor = () => colors[Math.floor(Math.random() * colors.length)];
    el.style.backgroundColor = getColor();
    el.style.boxShadow = `0 0 2px ${getColor}, 0 0 10px ${getColor}`;

}
function removeColor(e) {
  const el = e.target;
  el.style.backgroundColor = "black";
  el.style.boxShadow = `0 0 2px #000`;
};


 
