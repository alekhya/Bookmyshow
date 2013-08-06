function a() {
	var logo_image = document.getElementById("logo");
	logo_image.onclick = function() {
		alert("you clicked the image");
	};
}

/*function b() {
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
}; */
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
}

window.onload = function() {
	a();
	preventEventHandler();
	c();
}



