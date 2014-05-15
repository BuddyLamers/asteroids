(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (numAsteroids) {
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids(numAsteroids);
    this.bindKeyHandlers();
    this.ship = new Asteroids.Ship();
    console.log(this.ship);
  };

  Game.DIMX = 500;
  Game.DIMY = 500;
  Game.FPS = 50;
  Game.DT = 1000/Game.FPS;  //(milliseconds)
  Game.DV = 0.1;						// incremental velocity
  Game.DA = 0.2;						// incremental angle of rotation
  Game.MAXVEL = 2;
  Game.BULLETSPEED = 2.5;
	Game.INVINCIBLE = false;

  Game.prototype.addAsteroids = function(numAsteroids) {
    for(var i=0; i < numAsteroids; i++) {
      this.asteroids.push(
        Asteroids.Asteroid.randomAsteroid(Game.DIMX,Game.DIMY));
    }
  };

  Game.prototype.fireBullet = function() {
    this.bullets.push(this.ship.fireBullet());
    console.log("firing bullet" + this.bullets[0]);
    console.log(this);
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIMX, Game.DIMY);
    for(var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
    }
    for(var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw(ctx);
    }
    this.ship.draw(ctx);
  };

  Game.prototype.move = function() {
    for(var i = 0; i< this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
    for(var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].move();
     
      this.bullets[i].life = this.bullets[i].life - 1;
      // alert(this.bullets[i].life)
			if (this.bullets[i].life === 0) {
				this.removeObject(this.bullets, i);
			}
    }
    this.ship.move();
  };
	
	Game.prototype.isOffCanvas = function(object) {
		var x = object.pos[0];
		var y = object.pos[1];
		return (x > Game.DIMX || x < 0 || y > Game.DIMY || y < 0);
	};

  Game.prototype.checkCollisions = function() {
    for(var i = 0; i< this.asteroids.length; i++) {
      for (var j = 0; j < this.bullets.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.bullets[j])) {
					this.removeObject(this.asteroids, i);
					this.removeObject(this.bullets, j);
        }
      }

      if (!Game.INVINCIBLE && this.asteroids[i].isCollidedWith(this.ship)) {
        this.endGame();
      };
    }
  };
	
  Game.prototype.removeObject = function(object, index) {
		object.splice(index,1);
	}	

  Game.prototype.endGame = function() {
    window.alert ('You lose');
    window.clearInterval(this.interval);
    // should restart game aftere collision
    // this.start(ctx);
  };

  Game.prototype.checkWin = function() {
    if (this.asteroids.length===0) {
      window.alert ('You win!');
      window.clearInterval(this.interval);
    }
  };

  Game.prototype.bindKeyHandlers = function() {
    game = this;
    key('up',    function(){ game.ship.accelerate( Game.DV) });
    key('down',  function(){ game.ship.accelerate(-Game.DV) });
    key('left',  function(){ game.ship.rotate(-Game.DA) });
    key('right', function(){ game.ship.rotate(+Game.DA) });
    key('space', function(){ game.fireBullet() });
  };

  Game.prototype.step = function(ctx) {
    this.move();
    this.draw(ctx);
    this.checkCollisions();
    this.checkWin();
  };

  Game.prototype.start = function(ctx) {
    var game = this;
    game.ctx = ctx;
    this.interval = window.setInterval(function() {
      game.step(ctx);
    }, Game.DT);
  };
	
})(this);
