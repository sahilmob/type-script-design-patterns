//Typescript state pattern
var Order = /** @class */ (function () {
    function Order() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.setState(this.paymentPendingState);
    }
    Order.prototype.setState = function (state) {
        this.currentState = state;
    };
    Order.prototype.getState = function () {
        return this.currentState;
    };
    return Order;
}());
var PaymentPendingState = /** @class */ (function () {
    function PaymentPendingState(order) {
        this.order = order;
    }
    PaymentPendingState.prototype.cancelOrder = function () {
        console.log("Canceling your unpaid order");
        this.order.setState(this.order.cancelledOrderState);
    };
    PaymentPendingState.prototype.verifyPayment = function () {
        console.log("Payment verified");
        this.order.setState(this.order.orderBeingPreparedState);
    };
    PaymentPendingState.prototype.shipOrder = function () {
        console.log("Cannot ship order while payment is pending");
    };
    return PaymentPendingState;
}());
var CancelledOrderState = /** @class */ (function () {
    function CancelledOrderState(order) {
        this.order = order;
    }
    CancelledOrderState.prototype.cancelOrder = function () {
        console.log("Your order has already been canceled");
    };
    CancelledOrderState.prototype.verifyPayment = function () {
        console.log("Order canceled, you cannot verify your order");
    };
    CancelledOrderState.prototype.shipOrder = function () {
        console.log("Order canceled, we cannot ship your order");
    };
    return CancelledOrderState;
}());
var OrderBeingPreparedState = /** @class */ (function () {
    function OrderBeingPreparedState(order) {
        this.order = order;
    }
    OrderBeingPreparedState.prototype.cancelOrder = function () {
        console.log("Canceling your order");
        this.order.setState(this.order.cancelledOrderState);
    };
    OrderBeingPreparedState.prototype.verifyPayment = function () {
        console.log("Your order has already been verified");
    };
    OrderBeingPreparedState.prototype.shipOrder = function () {
        console.log("Shipping your order");
        this.order.setState(this.order.orderShippedState);
    };
    return OrderBeingPreparedState;
}());
var OrderShippedState = /** @class */ (function () {
    function OrderShippedState(order) {
        this.order = order;
    }
    OrderShippedState.prototype.cancelOrder = function () {
        console.log("Your order has already been shipped");
    };
    OrderShippedState.prototype.verifyPayment = function () {
        console.log("Your order has already been verified");
    };
    OrderShippedState.prototype.shipOrder = function () {
        console.log("Your order has already been shipped");
    };
    return OrderShippedState;
}());
var order = new Order();
order.getState().shipOrder();
console.log("Order state " + order.getState().constructor.name);
order.getState().verifyPayment();
order.getState().verifyPayment();
console.log("Order state " + order.getState().constructor.name);
order.getState().shipOrder();
order.getState().shipOrder();
