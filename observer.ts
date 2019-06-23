//Typescript observer pattern
interface Subject {
	registerObserver(o: Observer);
	removeObserver(o: Observer);
	notifyObservers();
}

interface Observer {
	update(temperature: number);
}
class WeatherStation implements Subject {
	private temperature: number;
	private observers: Observer[] = [];

	set setTemperature(temp: number) {
		console.log("WeatherStating: new temp. measurement: " + temp);
		this.temperature = temp;
		this.notifyObservers();
	}

	registerObserver(o: Observer) {
		this.observers.push(o);
	}

	removeObserver(o: Observer) {
		let index = this.observers.indexOf(o);
		this.observers.splice(index, 1);
	}

	notifyObservers() {
		for (let observer of this.observers) {
			observer.update(this.temperature);
		}
	}
}
