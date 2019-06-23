//Typescript facade pattern

class BluerayPlayer {
	on() {
		console.log("Blueray player turning on...");
	}
	turnOff() {
		console.log("Blueray turning off...");
	}
	play() {
		console.log("playing blureray disc...");
	}
}
class Amplifier {
	on() {
		console.log("Amp player turning on...");
	}
	turnOff() {
		console.log("Amp turning off...");
	}
	setSource(source: string) {
		console.log("Setting source to " + source);
	}
	setVolume(volumeLevel: number) {
		console.log("Setting volume to " + volumeLevel);
	}
}

class Lights {
	dim() {
		console.log("Lights are dimming..");
	}
}

class Tv {
	turnOn() {
		console.log("Tv turning on..");
	}
	turnOff() {
		console.log("Tv turning off..");
	}
}
class PopcornMaker {
	turnOn() {
		console.log("Popcorn maker turning on..");
	}
	turnOff() {
		console.log("Popcorn maker turning off..");
	}
	pop() {
		console.log("Popping corn");
	}
}
