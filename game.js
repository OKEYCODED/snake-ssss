import { update as updateSnake, draw as drawSanke, SNAKE_SPEED, 
getSankeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGdid }from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElemntById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
    } 
    return
  }
  
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRenders < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  chechDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function  chechkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
