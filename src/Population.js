import Ant from "./Ant"

export default class Population {
  constructor(amount) {
    this.amount = amount
    this.restart()
  }

  update() {
    let stillAliveAnts = false
    this.ants.map((ant) => {
      ant.update()
      if(ant.alive) {
        stillAliveAnts = true
      }
    })

    if(!stillAliveAnts) {
      this.restart()
    }
  }

  restart() {
    this.ants = []

    for(let i = 0; i < this.amount; i++) {
      this.ants.push(new Ant())
    }
  }
}
