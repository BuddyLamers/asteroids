(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function(pos, vel, rad, color) {
    this.pos = pos;
    this.vel = vel;
    this.rad = rad;
    this.color = color;
  }

  MovingObject.prototype.move = function() {
    xpos = (this.pos[0] + this.vel[0])%Asteroids.Game.DIMX ;
    ypos = (this.pos[1] + this.vel[1])%Asteroids.Game.DIMY ;

    this.pos[0] = (xpos > 0 ? xpos : Asteroids.Game.DIMX - xpos );
    this.pos[1] = (ypos > 0 ? ypos : Asteroids.Game.DIMY - ypos );
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.rad,
      0,
      (2 * Math.PI),
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function(otherObj) {
    var x1 = this.pos[0];
    var y1 = this.pos[1];
    var x2 = otherObj.pos[0];
    var y2 = otherObj.pos[1];

    var dist = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    return (dist < (this.rad + otherObj.rad));
    // how to handle distance when screen wrapping?
  };

})(this);

// module.exports.movingObject = this.Asteroids.movingObject;