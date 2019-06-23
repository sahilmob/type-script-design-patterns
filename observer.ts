//Typescript observer pattern

class WeatherStation {
	private temperature: number;

	set setTemperature(temp: number) {
		console.log("WeatherStating: new temp. measurement: " + temp);
		this.temperature = temp;
	}
}
