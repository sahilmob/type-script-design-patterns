//Typescript decorator pattern

abstract class car {
	public description: string;

	public getDescription(): string {
		return this.description;
	}

	public abstract cost(): number;
}

class ModelS {
	public description = "Model S";

	public cost(): number {
		return 73000;
	}
}
class ModelX {
	public description = "Model X";

	public cost(): number {
		return 77000;
	}
}
