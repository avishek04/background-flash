var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var mix = document.querySelector(".random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function generateRandomColor() {
	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	return color;
}

function setRandomGradient() {

	color1.value = generateRandomColor();
	color2.value = generateRandomColor();

	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function setRandomGradientInfinite() {
	for(var i=0; i<1000; i++)
	{
		task(i);
	}
	
	function task(i) { 
  setTimeout(function() { 
      setRandomGradient();
  }, 2000 * i); 
}
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

mix.addEventListener("click", setRandomGradientInfinite);

