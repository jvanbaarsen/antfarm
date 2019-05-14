import { vectorFromAngle } from "./Vector"

export default class Ant {
  constructor() {
    this.size = 10
    this.position = this.randomPosition()
    this.originalPosition = p5.createVector(this.position.x, this.position.y)
    this.color = p5.color(0)
    this.velocity = p5.createVector(0, 0)
    this.acceleration = p5.createVector(0, 0)
    this.direction = vectorFromAngle(p5.random(2 * p5.PI))
    this.alive = true
    this.food = Math.floor(p5.random(10, 200))
  }

  update() {
    if(!this.alive) {
      return
    }

    p5.fill(this.color)
    p5.circle(this.position.x, this.position.y, 10)
    this.acceleration = this.direction
    this.velocity.add(this.acceleration)
    this.velocity.limit(5)
    this.position.add(this.velocity)

    this.resetPosition()

     this.food -= 1
     if(this.food == 0) {
       this.alive = false
     }


  }

  randomPosition() {
    const x = p5.random(this.size / 2, p5.width - (this.size / 2))
    const y = p5.random(this.size / 2, p5.height - (this.size / 2))
    return p5.createVector(x, y)
  }

  outOfScreen() {
    const x = this.position.x
    const y = this.position.y
    return (x > p5.width || x < 0 || y < 0 || y > p5.height)
  }

  resetPosition() {
    if(!this.outOfScreen()) { return }
    this.position = p5.createVector(this.originalPosition.x, this.originalPosition.y)
  }
}
