var Customer = /** @class */ (function () {
    function Customer(name, id) {
        this._name = name;
        this._id = id;
    }
    Object.defineProperty(Customer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var customer = new Customer("arun", 5);
console.log(customer.name);
console.log(customer.id);
