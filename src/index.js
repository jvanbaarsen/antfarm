import p5 from 'p5';
import "p5/lib/addons/p5.dom"

import Main from "./Main"

const entrypoint = (p5) => {
  window.p5 = p5

  const main = new Main()

  p5.setup = () => {
    main.setup()
  }

  p5.draw = () => {
    main.draw()
  }
}
new p5(entrypoint)
