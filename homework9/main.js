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


//getPostByCallback


function getPostByCallback(){
	function post(callback){
		let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState ===  4 &&  this.status === 200) {
			callback(this.responseText);
		}
	};
	xhttp.open("GET", "http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}");
	xhttp.send();
	}

	post(function(responseText){
		console.log(JSON.parse(responseText));
	});

	};


//getPostByPromise

function getPostByPromise(){
	let myRequest = new Promise((resolve, reject)) => {
		let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState ===  4 &&  this.status === 200) {
			resolve(this.responseText);
			reject(this.status);
		}
	};
	xhttp.open("GET", "http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}");
	xhttp.send();
	}

	myRequest.then((responseText) => {
		console.warn(JSON.parse(responseText))
	}).catch((status) =>{
		console.warn(status)
	});
	};


});