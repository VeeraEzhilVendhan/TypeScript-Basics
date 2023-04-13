import { AndroidClass } from "./android";
import { IphoneClass } from "./iphone";
import { mobileBaseClass } from "./mobile";

let mobileInstance=new mobileBaseClass(false,"2G");
let androidInstance=new AndroidClass(true,"4G","12");
let iphoneInstance=new IphoneClass(true,"5G",true);

console.log("mobile properties: "+mobileInstance.getInfo());
console.log("android mobile properties: "+androidInstance.getInfo());
console.log("iphone properties: "+iphoneInstance.getInfo());