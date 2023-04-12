var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.Customer = function (cusname, cusid) {
        this.name = cusname;
        this.id = cusid;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getId = function () {
        return this.id;
    };
    Customer.prototype.setId = function (cusid) {
        this.id = cusid;
    };
    Customer.prototype.setName = function (cusname) {
        this.name = cusname;
    };
    return Customer;
}());
var customer = new Customer();
customer.id = 5;
customer.name = "arun";
console.log(customer);
customer.setId(6);
customer.setName("varun");
console.log(customer);
