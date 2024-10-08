import{ onSnake, expandSnake} from './snake.js'
import{ randomGridPosition } from '.grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 5
export funtion update() {
  if (onSanke(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart= food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null|| onSnake(newFoodPosition)){
    newFoodPosition = randomGridPositon()
  }
  return newFoodPosition
}
