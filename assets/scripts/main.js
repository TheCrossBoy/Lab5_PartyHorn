// main.js

// Helper function to update the different places
function setVolume(level) {
	document.getElementById("honk-btn").disabled = false;
	document.getElementById("horn-sound").volume = level/100;

	document.getElementById("volume-number").value = level;
	document.getElementById("volume-slider").value = level;

	let img = document.getElementById("volume-image");
	let url = "./assets/media/icons/volume-level-";

	if (level > 66) {
		img.src = url + 3 + ".svg";
	} else if (level > 33) {
		img.src = url + 2 + ".svg";
	} else if (level > 0) {
		img.src = url + 1 + ".svg";
	} else {
		img.src = url + 0 + ".svg";
		document.getElementById("honk-btn").disabled = true;
	}

	console.log("Volume set to", level);
}

// Set the volume
document.getElementById("volume-slider").addEventListener("change", event => {
	setVolume(event.target.value);
});

document.getElementById("volume-number").addEventListener("change", event => {
	setVolume(event.target.value);
})

// Set the sound
document.getElementById("audio-selection").addEventListener("change", event => {
    const choice = event.target.id.substr(6);

	document.getElementById("sound-image").src = "./assets/media/images/" + choice + ".svg";
	document.getElementById("horn-sound").src = "./assets/media/audio/" + choice + ".mp3";

	console.log("Sound set to", choice);
});

// Play the sound
document.getElementById("party-horn-form").addEventListener("submit", event => {
	document.getElementById("horn-sound").play();

	event.preventDefault();
});