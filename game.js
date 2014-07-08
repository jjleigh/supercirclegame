
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

	};

	this.move = function() {
		this.$me.animate ({
			top: "+=300",
			left: "+=300"
		}, {
		complete: function() {
			this.move();
		})
	}
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
