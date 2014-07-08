$(document).ready(function() {
	window.game = new Game(10, 10);
	window.game.start();

});
// this function sets the size of the circle
function Circle() {
	this.x = Math.random() * 450;
	this.y = Math.random() * 450;
	this.diameter = 30 + Math.random() * 50;
	this.speed = 500 + Math.random() * 1500;

//  this function 
	this.render = function() {
		var _this = this;

		this.$me = $('<div class="circle"></div>')
			.css('left', this.x)
			.css('top', this.y)
			.css('height', this.diameter)
			.css('width', this.diameter);
			.on('click', function() {
				_this.kill();
			});

		$('#game').append(this.$me);	
	};
}; 

// this function moves the bubles in the game 
this.move = function() {
	var _this = this;
	this.$me.animate ({
		top: Math.random() * 450,
		left: Math.random() * 450
	}, {
		duration: this.speed,
		complete: function() {
			_this.move();
		}
	});
};

// this function kills the bubble once they have been clicked
this.kill = function() {
	this.$me.css('background-color', 'red')
		.effect({
			effect: 'explode',
			duration: 100,
			complete: function() {
				$(this).remove();
				$('#score').text(window.game.score += 100);
			},
			queue: false
		});
};
//  this deal with creating a new circle
Circle.init = function() {
	var circle = new Circle();
	circle.render();
	circle.move();
	return circle;
};

// this fucntion deals with starting and stopping the game
function Game(circleCount, duration) {
this.score =0;
this.circles = [];
this.duration = duration * 1000;
this.circleCount = circleCount;

// this funciton starts the game
	this.start = function() {
		for(var i=0; i < this.circleCount; i++) {

			circles.push(new Circle.init());
			circles[i].render();
			circles[i].move();
		}

		$('#score').text(this.score);
		setTimeout(this.stop, this.duration);
	};
//  this function stops the game once its over
	this.stop = function() {
		alert('Game over!');

		for (var i = 0; i < this.circleCount; i++) {
			game.circles[i].$me.remove();
		}
	};
};

	// var circles = [];
	// for(var i=0; i < 10; i++) {

	// circles.push(new Circle());
	// circles[i].render
	// circles[i].move
	// }
