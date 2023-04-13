var Customer = /** @class */ (function () {
    function Customer(_name, _id) {
        this._name = _name;
        this._id = _id;
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
console.log(customer);
//using getters and setters
customer.id = 7;
customer.name = "varun";
console.log(customer);
