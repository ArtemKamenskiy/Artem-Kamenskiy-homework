let theatre = document.querySelectorAll('.theatre'),
	leftArrow = document.querySelector(".slider-arrowf"),
	rightArrow = document.querySelector(".slider-arrows");
	counter = 0;

function clickArrowLeft() {
	if (counter === 0) {
    	counter = theatre.length;
 	}
    slideLeft();
}
leftArrow.addEventListener("click", clickArrowLeft);

function clickArrowRight() {
	if (counter === theatre.length - 1) {
    counter = -1;
  }
  slideRight();
}
rightArrow.addEventListener("click", clickArrowRight);

function startSlide() {
  reset();
  theatre[counter].style.display = "block";
}
function slideLeft() {
  reset();
  theatre[counter - 1].style.display = "block";
  counter--;
}
function slideRight() {
  reset();
  theatre[counter + 1].style.display = "block";
  counter++;
}

function reset(){
for (let i = 0; i < theatre.length; i++) {
     theatre[i].style.display = "none"; 
  }
}
startSlide();