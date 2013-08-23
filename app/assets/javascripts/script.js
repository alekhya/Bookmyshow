/*
function a() {
	var logo_image = document.getElementById("logo");
	logo_image.onclick = function() {
		alert("you clicked the image");
	};
}

function b() {
var com = document.getElementById("comment");
com.onfocus = function() {
	if (com.value == "Please enter comments") {
		com.value = "";
	}
}
com.onblur = function() {
	if (com.value == "") {
		com.value = "Please enter comments";
	}
}
}; 
function preventEventHandler(){
	document.getElementById("new_movie").onsubmit = function(){
		if (document.getElementById("movie_name").value == "") {
			document.getElementById("error_message").innerhtml()= "Please provide movie name";
			return false;
		} else {
			document.getElementById("error_message").innerhtml()= "";
			return true;
		}
	};
}

function c(){
var event_image = document.getElementById("movies_list");
var event_image_array = ["/assets/conjuring.jpg", "/assets/smurfs.jpg", "/assets/zambezia.jpg", "/assets/chennai_express.jpg"]
var index = 0;
function changeImage(){
	event_image.setAttribute("src", event_image_array[index]);
	index ++;
	if (index >= event_image_array.length){
		index=0;
	}
}
var intervalhandler = setInterval(changeImage, 5000);
event_image.onclick = function(){
	clearInterval(intervalhandler);
};
}*/
/*
var intervalHandle;
var currentPos = 0;

function beginAnimate(){
	document.getElementById("movies_list").style.position = "absolute";
	document.getElementById("movies_list").style.left = "0px";
	document.getElementById("movies_list").style.top = "100px";

	intervalHandle = setInterval(animateBox, 50);
}

function animateBox(){
	currentPos += 5;
	document.getElementById("movies_list").style.left = currentPos + "px";
	if (currentPos > 900) {
		clearInterval(intervalHandle);
		document.getElementById("movies_list").style.position = "";
		document.getElementById("movies_list").style.left = "";
		document.getElementById("movies_list").style.top = "";
	}
}

window.onload = function() {
	//a();
	//preventEventHandler();
	//c();
	// do a single call to beginanimate fn in 5secs after page is loaded.
	setTimeout(beginAnimate,5000);
}
*/
$(document).ready(function(){
	$("#welcome").click(function(){
		alert(this).attr("src");
	});
});

