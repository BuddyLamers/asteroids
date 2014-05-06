(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function () {
    var shipPos = [Asteroids.Game.DIMX/2,Asteroids.Game.DIMY/2];
    Asteroids.MovingObject.call(this, shipPos, [0,0], Ship.RADIUS, Ship.COLOR);
    this.angle = 0; //in radians
  };

  Ship.RADIUS = 10;
  Ship.COLOR = 'blue';
  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.rotate = function(angleRotation) {
    this.angle += angleRotation;
    // cap the speed to game.MAXVEL
  };

  Ship.prototype.accelerate = function(thrust) {
    this.vel[0] += thrust * this.direction_vector()[0];
    this.vel[1] += thrust * this.direction_vector()[1];
  };

  Ship.prototype.fireBullet = function() {
    console.log(this);
    return (new Asteroids.Bullet(this.pos.slice(), this.vel.slice(), this.direction_vector()));
  };

  Ship.prototype.direction_vector = function() {
    var vx = Math.cos(this.angle);
    var vy = Math.sin(this.angle);
    return [vx, vy];
  };
})(this);
