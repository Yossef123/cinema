// First check if local storage objects exist
// If first element is defined, it means the database has been initialised

//localStorage.removeItem("000");

var audiType1 = "";

for(var l=0; l<audi_list.audis[0].Rows; l++){
	for(var k=0; k<audi_list.audis[0].Columns; k++){
		audiType1 = audiType1 + "0";
	}
};

function init(){
	for(var i=0; i<movie_info.movies.length; i++){
		for(var j=0; j<movie_info.movies[i].Date.length; j++){
			for(var k=0; k<movie_info.movies[i].Time.length; k++){
				var id = "" + i + j + k;
				localStorage.setItem(id,audiType1);
			}
		}
	}
}

if(localStorage.getItem("000") === null) {
	// Initialise all shows
	init();
}