window.onload = function() {

	function toScreen(){
		var text = document.getElementById("text").value;
		var newText = document.createElement('h2');
		newText.innerHTML = text;
		document.getElementById("printText").appendChild(newText);
	};


	var element = document.getElementById("button");
	element.addEventListener("click", toScreen, false);

}();