(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function (shipPos, shipVel, shipDir) {
    var vel = this.bullVel(shipVel, shipDir)
    this.life = 200;
    Asteroids.MovingObject.call(this, shipPos, vel, Bullet.RADIUS, Bullet.COLOR);
  };

  Bullet.RADIUS = 2;
  Bullet.COLOR  = 'red';
  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype.bullVel = function (shipVel, shipDir) {
    var cX = shipDir[0] * Asteroids.Game.BULLETSPEED;
    var cY = shipDir[1] * Asteroids.Game.BULLETSPEED;
    return ([cX + shipVel[0], cY + shipVel[1]]);
  };

})(this);
