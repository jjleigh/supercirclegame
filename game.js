var circles = [];

for(var i=0; i < 10; i++) {
// create circle and then add to array
circles.push(new Circle());
}
function Circle() {
	this.x = Math.random() * 450;
	this.y = Math.random() * 450;
	this.diameter = 30 + Math.random() * 50;
	this.speed = 500 + Math.random() * 1500;
}
$(document).ready(function() {
	$('.circle').animate({
		top: "+=300",
		left: "+=300"
		
	}, {
		complete: function() {
			alert("I moved!");
		}
	});	
});
