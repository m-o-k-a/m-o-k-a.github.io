function basics1() {
	document.getElementById("content").innerHTML = '<p class="word">tôi</p><br><i id="translate">(I, me)</i>';
}

function hide() {
	document.getElementById("buttonA").innerHTML = '<p id="buttonB"><button class="button" onclick="show()">Show Translation</button></p>';
	document.getElementById("translate").style.visibility = "hidden";
}

function show() {
	document.getElementById("buttonB").innerHTML = '<p id="buttonA"><button class="button" onclick="hide()">Hide Translation</button></p>';
	document.getElementById("translate").style.visibility = "visible";
}