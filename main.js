let s = (sk) => {
  sk.setup = () => {
    sk.createCanvas(800, 800);
    sk.background(50);
  }

  sk.draw = () => {

  }
}

new p5(s);