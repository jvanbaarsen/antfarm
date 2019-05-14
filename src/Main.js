import Population from "./Population"

export default class Main {
  setup() {
    this.backgroundColor = p5.color("#F7FAFC")
    p5.createCanvas(800, 400)
    p5.background(this.backgroundColor)

    this.population = new Population(1000)
  }

  update() {
    p5.background(this.backgroundColor)
    this.population.update()
  }
}
