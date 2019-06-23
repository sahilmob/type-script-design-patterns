//Typescript decorator pattern

abstract class Car {
	public description: string;

	public getDescription(): string {
		return this.description;
	}

	public abstract cost(): number;
}

class ModelS extends Car {
	public description = "Model S";

	public cost(): number {
		return 73000;
	}
}
class ModelX extends Car {
	public description = "Model X";

	public cost(): number {
		return 77000;
	}
}
