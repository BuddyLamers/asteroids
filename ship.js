(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function () {
    var shipPos = [Asteroids.Game.DIMX/2,Asteroids.Game.DIMY/2];
    Asteroids.MovingObject.call(this, shipPos, [0,0], Ship.RADIUS, Ship.COLOR);
    this.angle = 0; //in radians
  };

	Ship.MAXVEL = 3;
  Ship.RADIUS = 10;
  Ship.COLOR = 'blue';
  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.rotate = function(angleRotation) {
    this.angle += angleRotation;
  };

  Ship.prototype.accelerate = function(thrust) {
		var tempVel = [];
    tempVel[0] = this.vel[0] + thrust * this.direction_vector()[0];
    tempVel[1] = this.vel[1] + thrust * this.direction_vector()[1];
		
		var shipVel = Math.sqrt(Math.pow(tempVel[0],2)+Math.pow(tempVel[1],2));
		if (shipVel < Ship.MAXVEL) {
			this.vel[0] = tempVel[0];
			this.vel[1] = tempVel[1];
		};
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
	
  Ship.prototype.draw = function(ctx) {
    ctx.fillStyle = Ship.COLOR;
    ctx.beginPath();

		var pt1 = [20,0];
		var pt2 = [-10,10];
		var pt3 = [-10,-10];

		var newPt1 = this.rotateCoord(pt1); 
		var newPt2 = this.rotateCoord(pt2); 
		var newPt3 = this.rotateCoord(pt3); 

		ctx.beginPath();
		ctx.moveTo(this.pos[0]+newPt1[0], this.pos[1]+newPt1[1]);
		ctx.lineTo(this.pos[0]+newPt2[0], this.pos[1]+newPt2[1]);
		ctx.lineTo(this.pos[0]+newPt3[0], this.pos[1]+newPt3[1]);
    ctx.fill();
  };
	
	Ship.prototype.rotateCoord = function(coord) {
		// calculate rotated coordinate given a `coord` and the ships angle
		// based on rotation matrix on a 2D plane
		var dv = this.direction_vector(); // direction vector
		var coord1 = coord[0]*dv[0] - coord[1]*dv[1];
		var coord2 = coord[0]*dv[1] + coord[1]*dv[0];
		return [coord1, coord2];
	}
})(this);
