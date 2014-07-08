function Game(circleCount, duration) {
	this.score =0;
	this.circles = [];
	this.duration = (duration || 10) * 1000;
	this.circleCount = circleCount || 10;

	this.start = function() {
	for(var i=0; i < this.circleCount; i++) {
	// create circle and then add to array
	circles.push(new Circle());
	circles[i].render();
	circles[i].move();
	}

	$('#score').text(this.score);
	setTimeout(this.stop, this.duration);
}

	this.stop = function() {
		alert('Game over!');

		for (var i = 0; i < this.circleCount; i++) {
			game.circles[i].$me.remove();
		}
	}

function Circle() {
	this.x = Math.random() * 450;
	this.y = Math.random() * 450;
	this.diameter = 30 + Math.random() * 50;
	this.speed = 500 + Math.random() * 1500;

	this.render = function() {
		this.$me = $('<div class="circle"></div>')
			.css('left', this.x)
			.css('top', this.y)
			.css('height', this.diameter)
			.css('width', this.diameter);
		$('#game').append(this.$me);
			.on('click')

	};

	this.move = function() {
		var _this = this;
		this.$me.animate ({
			top: "+=300",
			left: "+=300"
		}, {
		duration: this.speed,
		complete: function() {
			_this.move();
		})
	}
}

	this.kill = function() {

	}

;
$(document).ready(function() {
	var circles = [];

	for(var i=0; i < 10; i++) {
	// create circle and then add to array
	circles.push(new Circle());
	circles[i].render
	circles[i].move
	}
	// $('.circle').animate({
		
		
	// },
	// });	
});
