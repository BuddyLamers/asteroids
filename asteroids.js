// var inherits = require('./inheritance');
// var movingObject = require('./movingObject');

// console.log(movingObject.Asteroids.MovingObject);
// var Aster = function (pos,vel,rad,color) {
//   movingObject.Asteroids.MovingObject.call(this, pos, vel, rad, color);
// };
//
// Aster.inherits(movingObject);
// as = new Aster([0,2], [0,2], 4, 'green');
// console.log(as);

(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos,vel) {
    Asteroids.MovingObject         //better way to do this?
      .call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
  };

  Asteroid.COLOR  = 'black';
  Asteroid.RADIUS = 10;
  Asteroid.VELCON = 1.5;
  Asteroid.inherits(Asteroids.MovingObject);   // tested and approved?

  Asteroid.randomAsteroid = function(dimX, dimY) {
    pos = [Math.random() * dimX, Math.random() * dimY];
    vel = [((Math.random()*2) - 1) * Asteroid.VELCON,
           ((Math.random()*2) - 1) * Asteroid.VELCON];

    return (new Asteroid(pos, vel));
  };

})(this);

