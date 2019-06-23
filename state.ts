//Typescript state pattern

interface State {
	order: Order;

	cancelOrder();
	verifyPayment();
	shipOrder();
}

class Order {
	public cancelledOrderState: State;
	public paymentPendingState: State;
	public orderShippedState: State;
	public orderBeingPreparedState: State;

	public currentState: State;
	constructor() {
		this.cancelledOrderState = new CancelledOrderState(this);
		this.paymentPendingState = new PaymentPendingState(this);
		this.orderShippedState = new OrderShippedState(this);
		this.orderBeingPreparedState = new OrderBeingPreparedState(this);

		this.setState(this.paymentPendingState);
	}

	public setState(state: State) {
		this.currentState = state;
	}

	public getState(): State {
		return this.currentState;
	}
}

class PaymentPendingState implements State {
	order: Order;

	constructor(order: Order) {
		this.order = order;
	}

	cancelOrder() {
		console.log("Canceling your unpaid order");
		this.order.setState(this.order.cancelledOrderState);
	}
	verifyPayment() {
		console.log("Payment verified");
		this.order.setState(this.order.orderBeingPreparedState);
	}
	shipOrder() {
		console.log("Cannot ship order while payment is pending");
	}
}
class CancelledOrderState implements State {
	order: Order;

	constructor(order: Order) {
		this.order = order;
	}

	cancelOrder() {
		console.log("Your order has already been canceled");
	}
	verifyPayment() {
		console.log("Order canceled, you cannot verify your order");
	}
	shipOrder() {
		console.log("Order canceled, we cannot ship your order");
	}
}

class OrderBeingPreparedState implements State {
	order: Order;

	constructor(order: Order) {
		this.order = order;
	}

	cancelOrder() {
		console.log("Canceling your order");
		this.order.setState(this.order.cancelledOrderState);
	}
	verifyPayment() {
		console.log("Your order has already been verified");
	}
	shipOrder() {
		console.log("Shipping your order");
		this.order.setState(this.order.orderShippedState);
	}
}

class OrderShippedState implements State {
	order: Order;

	constructor(order: Order) {
		this.order = order;
	}

	cancelOrder() {
		console.log("Your order has already been shipped");
	}
	verifyPayment() {
		console.log("Your order has already been verified");
	}
	shipOrder() {
		console.log("Your order has already been shipped");
	}
}

let order = new Order();
order.getState().shipOrder();

console.log("Order state " + (<any>order.getState()).constructor.name);

order.getState().verifyPayment();

order.getState().verifyPayment();

console.log("Order state " + (<any>order.getState()).constructor.name);

order.getState().shipOrder();
order.getState().shipOrder();
