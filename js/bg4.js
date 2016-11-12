var c = document.getElementById('c'),
    ctx = c.getContext('2d'),
    cw = window.innerWidth,
    ch = window.innerHeight;
c.width = cw;
c.height = ch;
var rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);}

var particles = [],
		particlesPerTeam = 40,
    maxVelocity = 3,
    teams = [];
    teamCount = 12;
		var ti;

    for(ti = 0; ti < teamCount; ti++){
      teams.push({
        team: ti,
        color: 'hsla('+((360/teamCount)*ti)+', 90%, 50%, .8)',
        attracts: ti,
        repels: (ti === teamCount-1) ? 0 : ti+1
      });
    }

var Particle = function(x, y, vx, vy, radius, team){
	this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = radius;
  this.team = team;
}

var createParticles = function(){
	var i = teams.length;
	while(i--){
  	var i2 = particlesPerTeam;
  	while(i2--){
      particles.push(new Particle(
        cw/2,
        ch/2,
      	rand(-1000, 1000)/1000,
      	rand(-1000, 1000)/1000,
      	rand(1, 6)/2,
      	i      		
      ));
		}
  }
}
    
var updateParticles = function(){
	var i = particles.length;
  while(i--){
    var p = particles[i];
		var i2 = particles.length;
		while(i2--){
      if(i != i2){
        var p2 = particles[i2];
        var dx = p2.x - p.x;
        var dy = p2.y - p.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if(dist <= 100){       
          if(p.team == teams[p2.team].attracts){
            p.vx += dx/(30000*p2.radius);
            p.vy += dy/(30000*p2.radius);
          } else if(p.team == teams[p2.team].repels){
            p.vx -= dx/(55000*p2.radius);
            p.vy -= dy/(55000*p2.radius);
          }
        }
      }
		}
		
   
		capVelocity(p);
		p.x += p.vx;
		p.y += p.vy;
		loopBounds(p);
  }   
}
    
var renderParticles = function(){
  var i = particles.length;  
  while(i--){
    var p = particles[i];
    ctx.fillStyle = teams[p.team].color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI *2, false);
    ctx.closePath();
    ctx.fill();
  }   
}

var loopBounds = function(p){
  if(p.y < -p.radius){
    p.y = ch + p.radius;
  }
  if(p.x > cw + p.radius){
    p.x = -p.radius;
  }
  if(p.y > ch + p.radius){
    p.y = -p.radius;
  }		
  if(p.x < -p.radius){
    p.x = cw + p.radius;
  }
}
    
var capVelocity = function(p){
	 if(p.vx > maxVelocity){
      p.vx = maxVelocity;
   }
  if(p.vx < -maxVelocity){
      p.vx = -maxVelocity;
   }
  if(p.vy > maxVelocity){
      p.vy = maxVelocity;
   }
  if(p.vy < -maxVelocity){
      p.vy = -maxVelocity;
   }
}
    
var eraseIt = function(){  
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(0, 0, 0, .3)';
  ctx.fillRect(0, 0, cw, ch);
  ctx.globalCompositeOperation = 'lighter';
}
    
var loopsIDidItAgain = function(){
  eraseIt();  
	updateParticles();  
  renderParticles();
}

createParticles();
setInterval(loopsIDidItAgain, 16);