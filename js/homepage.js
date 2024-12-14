
var video = document.getElementById('video');
var links = document.getElementsByClassName('links_title');
var trailerTitle = document.getElementById('movieName');
var source_mp4 = document.createElement('source');
var source_ogg = document.createElement('source');
var sound = true;

var movies_mp4 = [
					"http://courses.cs.cityu.edu.hk/cs2204/nature.mp4",
					"http://courses.cs.cityu.edu.hk/cs2204/chocolate.mp4",
					"http://courses.cs.cityu.edu.hk/cs2204/barbecue.mp4",
					"http://courses.cs.cityu.edu.hk/cs2204/sweets.mp4",
					"http://courses.cs.cityu.edu.hk/cs2204/wonders.mp4",
					]

var movies_ogg = [
					"http://courses.cs.cityu.edu.hk/cs2204/nature.ogg",
					"http://courses.cs.cityu.edu.hk/cs2204/chocolate.ogg",
					"http://courses.cs.cityu.edu.hk/cs2204/barbecue.ogg",
					"http://courses.cs.cityu.edu.hk/cs2204/sweets.ogg",
					"http://courses.cs.cityu.edu.hk/cs2204/wonders.ogg",
					]

var movie_titles = [
					"Natures Revenge",
					"Death By Chocolate",
					"In Between Posts",
					"The Diary",
					"Jonty Cobra: Grail",
					]
var video_number = 0;

video.appendChild(source_mp4);
video.appendChild(source_ogg);

source_mp4.setAttribute('src', movies_mp4[video_number]);
source_ogg.setAttribute('src', movies_ogg[video_number]);

video.play();	

var change_video = function change_video(movie_name) {

	
	if (typeof movie_name != "undefined") {
		if (movie_name == "Natures Revenge") {
			video_number = 0;
		}
		else if(movie_name == "Death by Chocolate"){
			video_number = 1;
		}
		else if (movie_name == "In Between Posts") {
			video_number = 2;
		}
		else if (movie_name == "The Diary") {
			video_number = 3;
		}
		else if (movie_name == "Jonty Cobra: Grail") {
			video_number = 4;
		}
		
	}
	else if (video_number == 4) {
		video_number = 0;
	}
	else{
		video_number = video_number + 1;
	}

	source_mp4.setAttribute('src', movies_mp4[video_number]);
	source_ogg.setAttribute('src', movies_ogg[video_number]);


	video.load();
	video.play();
    
    trailerTitle.innerHTML = movie_titles[video_number].toUpperCase();
}


var toggle_voice = function toggle_voice(state){
	if(state == sound){
		return;
	}
	else {
		if(sound == false){
			video.muted = false;
			sound = true;
		} else {
			video.muted = true;
			sound = false;
		}
	}
}


