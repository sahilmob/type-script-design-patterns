//Typescript observer pattern
interface Subject {
	registerObserver(o: Observer);
	removeObserver(o: Observer);
	notifyObservers();
}

interface Observer {
	update(temperature: number);
}
class WeatherStation {
	private temperature: number;

	set setTemperature(temp: number) {
		console.log("WeatherStating: new temp. measurement: " + temp);
		this.temperature = temp;
	}
}