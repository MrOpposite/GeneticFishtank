fishtank = null;

window.onload = window.onresize = function() {
    fishtank = fishtank||new FishTank();

    var C = 0.8;        // canvas width to viewport width ratio
    var W_TO_H = 2/1;   // canvas width to canvas height ratio
    var el = fishtank.stage.canvas;

    // For IE compatibility http://www.google.com/search?q=get+viewport+size+js
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    var canvasWidth = viewportWidth;
    var canvasHeight = viewportHeight;

    el.setAttribute("width", canvasWidth);
    el.setAttribute("height", canvasHeight);

    fishtank.update();
}

class FishTank {

  constructor() {
    createjs.Ticker.addEventListener("tick", this.handleTick.bind(this));
    this.stage = new createjs.Stage("fishTankCanvas");
    let width = this.stage.canvas.width;
    let height = this.stage.canvas.height;
    this.circle = new createjs.Shape();
    this.circle.x = width/2;
    this.circle.y = height/2;
    this.circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    this.stage.addChild(this.circle);
  }


  update() {
    let width = this.stage.canvas.width;
    let height = this.stage.canvas.height;
    this.circle.x += (this.stage.mouseX-this.circle.x)/10;
    this.circle.y += (this.stage.mouseY-this.circle.y)/10;

    this.stage.update();
  }

  handleTick(event) {
    //console.log(event);
    if(!event.paused)
      this.update();
  }

}
