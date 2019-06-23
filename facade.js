//Typescript facade pattern
var BluerayPlayer = /** @class */ (function () {
    function BluerayPlayer() {
    }
    BluerayPlayer.prototype.on = function () {
        console.log("Blueray player turning on...");
    };
    BluerayPlayer.prototype.turnOff = function () {
        console.log("Blueray turning off...");
    };
    BluerayPlayer.prototype.play = function () {
        console.log("playing blureray disc...");
    };
    return BluerayPlayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log("Amp player turning on...");
    };
    Amplifier.prototype.turnOff = function () {
        console.log("Amp turning off...");
    };
    Amplifier.prototype.setSource = function (source) {
        console.log("Setting source to " + source);
    };
    Amplifier.prototype.setVolume = function (volumeLevel) {
        console.log("Setting volume to " + volumeLevel);
    };
    return Amplifier;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log("Lights are dimming..");
    };
    return Lights;
}());
var Tv = /** @class */ (function () {
    function Tv() {
    }
    Tv.prototype.turnOn = function () {
        console.log("Tv turning on..");
    };
    Tv.prototype.turnOff = function () {
        console.log("Tv turning off..");
    };
    return Tv;
}());
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log("Popcorn maker turning on..");
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log("Popcorn maker turning off..");
    };
    PopcornMaker.prototype.pop = function () {
        console.log("Popping corn");
    };
    return PopcornMaker;
}());
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(bluery, amp, lights, tv, popcornMaker) {
        this.bluery = bluery;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource("blueray");
        this.amp.setVolume(11);
        this.bluery.on();
        this.bluery.play();
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popcornMaker.turnOff();
        this.tv.turnOff();
        this.amp.turnOff();
        this.bluery.turnOff();
    };
    return HomeTheaterFacade;
}());
var blueray = new BluerayPlayer();
var amp = new Amplifier();
var lights = new Lights();
var tv = new Tv();
var popcornMaker = new PopcornMaker();
var homeTheaterFacade = new HomeTheaterFacade(blueray, amp, lights, tv, popcornMaker);
homeTheaterFacade.watchMovie();
homeTheaterFacade.endMovie();
