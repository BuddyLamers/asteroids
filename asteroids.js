(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos,vel, size) {
    this.size = size;
    var asteroidRadius = this.size * Asteroid.RADIUS
    Asteroids.MovingObject.call(this, pos, vel, asteroidRadius, Asteroid.COLOR);
    
  };

  Asteroid.COLOR  = 'black';
  Asteroid.RADIUS = 10;
  Asteroid.VELCON = 1.5;
  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function(dimX, dimY) {
    var pos = [Math.random() * dimX, Math.random() * dimY];
    var vel = [((Math.random()*2) - 1) * Asteroid.VELCON,
    ((Math.random()*2) - 1) * Asteroid.VELCON];

    return (new Asteroid(pos, vel, 3));
  };


})(this);

