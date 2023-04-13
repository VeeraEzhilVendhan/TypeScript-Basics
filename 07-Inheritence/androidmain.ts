import { AndroidClass } from "./android";
import { mobileBaseClass } from "./mobile";

let mobileInstance=new mobileBaseClass(false,"2G");
let androidInstace=new AndroidClass(true,"4G","12");

console.log("mobile properties "+mobileInstance.getInfo());
console.log("android mobile properties "+androidInstace.getInfo())