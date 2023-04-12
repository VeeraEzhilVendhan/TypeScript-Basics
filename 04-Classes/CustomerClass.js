var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.Customer = function (cusname, cusid) {
        this.name = cusname;
        this.id = cusid;
    };
    return Customer;
}());
var customer = new Customer();
customer.id = 5;
customer.name = "arun";
console.log(customer);
