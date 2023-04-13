"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var customer = new Customer_1.Customer("arun", 5);
console.log(customer.name);
console.log(customer.id);
console.log(customer);
//using getters and setters
customer.id = 7;
customer.name = "varun";
console.log(customer);
