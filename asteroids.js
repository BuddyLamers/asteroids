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

  Asteroid.asteroidAtPosition = function(pos, vel, size) {
    alert("aaa");
    // var new_vel = [vel[0] * -1, vel[1] * -1];
    // return (new Asteroid([5,5], new_vel, size));
  };

  Asteroid.randomAsteroid = function(dimX, dimY) {
    var pos = [Math.random() * dimX, Math.random() * dimY];
    var vel = [((Math.random()*2) - 1) * Asteroid.VELCON,
    ((Math.random()*2) - 1) * Asteroid.VELCON];

    return (new Asteroid(pos, vel, 3));
  };

  

  Asteroid.splitAsteroid = function(hit_asteroid, hitting_bullet) {
  };

})(this);

