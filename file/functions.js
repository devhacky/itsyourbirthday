

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);


//days calculator

// function timeElapse(date) {
//     var current = new Date();  // Get current date and time
//     var seconds = (current - date) / 1000;  // Calculate difference in seconds

//     var days = Math.floor(seconds / (3600 * 24));  // Calculate total days
//     seconds = seconds % (3600 * 24);  // Remaining seconds after extracting days

//     var hours = Math.floor(seconds / 3600);  // Calculate hours
//     if (hours < 10) {
//         hours = "0" + hours;
//     }
//     seconds = seconds % 3600;  // Remaining seconds after extracting hours

//     var minutes = Math.floor(seconds / 60);  // Calculate minutes
//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
//     seconds = Math.floor(seconds % 60);  // Remaining seconds
//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }

//     var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes + "</span> "; 
//     $("#clock").html(result);

//     var text = "THE WORLD JUST GOT LUCKIER SINCE ";
//     $("#message-box").html(text);
// }





// birthday countdown
function timeElapse(targetDate) {
    var now = new Date();
    var secondsLeft = (targetDate - now) / 1000;

    if (secondsLeft <= 0) {
        $("#clock").html("<span class='boom'>🎉 HAPPY BIRTHDAY BABY! 🎂💖</span>");
        $("#message-box").html("THE WORLD IS CELEBRATING YOU RIGHT NOW!");
        triggerBoomEffects();  // You can define confetti/fireworks/text animation here
        return;
    }

    var days = Math.floor(secondsLeft / (3600 * 24));
    secondsLeft %= 3600 * 24;

    var hours = Math.floor(secondsLeft / 3600);
    if (hours < 10) hours = "0" + hours;
    secondsLeft %= 3600;

    var minutes = Math.floor(secondsLeft / 60);
    if (minutes < 10) minutes = "0" + minutes;

    var seconds = Math.floor(secondsLeft % 60);
    if (seconds < 10) seconds = "0" + seconds;

    var result = "Time Left: <span class='digit'>" + days + "</span> Days <span class='digit'>" + hours + "</span> Hours <span class='digit'>" + minutes + "</span> Minutes <span class='digit'>" + seconds + "</span> Seconds";
    $("#clock").html(result);
    $("#message-box").html("Countdown to the most beautiful soul's birthday 🎈");


    var birthStart = new Date(2004, 3, 7); // assuming date of birth
    var today = new Date();

    
    var totalDays = Math.floor((today - birthStart) / (1000 * 60 * 60 * 24));
    $("#day-counter").html(totalDays);
    
}






























// function timeElapse(date){
// 	var current = new Date();
// 	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
// 	var days = Math.floor(seconds / (3600 * 24));
// 	seconds = seconds % (3600 * 24);
// 	var hours = Math.floor(seconds / 3600);
// 	if (hours < 10) {
// 		hours = "0" + hours;
// 	}
// 	seconds = seconds % 3600;
// 	var minutes = Math.floor(seconds / 60);
// 	if (minutes < 10) {
// 		minutes = "0" + minutes;
// 	}
// 	seconds = seconds % 60;
// 	if (seconds < 10) {
// 		seconds = "0" + seconds;
// 	}
// 	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes; 
// 	$("#clock").html(result);

// 	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
// 	$("#message-box").html(text);

// }
