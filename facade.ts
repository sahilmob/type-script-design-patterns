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

class HomeTheaterFacade {
	private bluery: BluerayPlayer;
	private amp: Amplifier;
	private lights: Lights;
	private tv: Tv;
	private popcornMaker: PopcornMaker;

	constructor(
		bluery: BluerayPlayer,
		amp: Amplifier,
		lights: Lights,
		tv: Tv,
		popcornMaker: PopcornMaker
	) {
		this.bluery = bluery;
		this.amp = amp;
		this.lights = lights;
		this.tv = tv;
		this.popcornMaker = popcornMaker;
	}

	public watchMovie() {
		this.popcornMaker.turnOn();
		this.popcornMaker.pop();

		this.lights.dim();

		this.tv.turnOn();

		this.amp.on();
		this.amp.setSource("blueray");
		this.amp.setVolume(11);

		this.bluery.on();
		this.bluery.play();
	}

	public endMovie() {
		this.popcornMaker.turnOff();
		this.tv.turnOff();
		this.amp.turnOff();
		this.bluery.turnOff();
	}
}

let blueray = new BluerayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new Tv();
let popcornMaker = new PopcornMaker();

let homeTheaterFacade = new HomeTheaterFacade(
	blueray,
	amp,
	lights,
	tv,
	popcornMaker
);

homeTheaterFacade.watchMovie();
homeTheaterFacade.endMovie();
