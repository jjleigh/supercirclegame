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

	this.move = function() {
		var _this = this;
		this.$me.animate ({
			top: Math.random() * 450,
			left: Math.random() * 450
		}, {
		duration: this.speed,
		complete: function() {
			_this.move();
		})
	};

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
