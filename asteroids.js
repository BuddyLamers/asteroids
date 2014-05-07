(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos,vel) {
    Asteroids.MovingObject.call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
  };

  Asteroid.COLOR  = 'black';
  Asteroid.RADIUS = 10;
  Asteroid.VELCON = 1.5;
  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function(dimX, dimY) {
    pos = [Math.random() * dimX, Math.random() * dimY];
    vel = [((Math.random()*2) - 1) * Asteroid.VELCON,
           ((Math.random()*2) - 1) * Asteroid.VELCON];

    return (new Asteroid(pos, vel));
  };

})(this);

