import { Customer } from "./Customer"

let customer=new Customer("arun",5);
console.log(customer.name);
console.log(customer.id);
console.log(customer);
//using getters and setters
customer.id=7;
customer.name="varun";
console.log(customer);