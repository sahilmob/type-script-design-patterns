interface IPhone {
	useLightning();
}

interface Android {
	useMicroUSB();
}

class iPhone7 implements IPhone {
	useLightning() {
		console.log("Using lightning port..");
	}
}

class GooglePixel implements Android {
	useMicroUSB() {
		console.log("Using micro usb..");
	}
}
