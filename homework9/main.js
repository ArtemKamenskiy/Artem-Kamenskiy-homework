document.addEventListener("DOMContentLoaded", () => {
function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

let rand = random(0, 11);

setTimeout(function() {
	console.log(rand);
} ,1000)


setTimeout(function() {
	console.log(rand);
} ,2000)

function getPostByCallback(){

function post(callback){

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if (this.readyState ===  4 &&  this.status === 200) {
		callback(JSON.parse(this.responseText));
	}
};
xhttp.open("GET", "http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}");
xhttp.send();
}

post(function(callback){
	console.log(JSON.parse(this.responseText));
});

}


});