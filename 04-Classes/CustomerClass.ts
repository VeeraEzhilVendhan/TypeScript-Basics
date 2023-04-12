class Customer{
     name:string;
     id:number;

     Customer(cusname:string, cusid:number){
        this.name=cusname;
        this.id=cusid;
     }
}

let customer=new Customer();
customer.id=5;
customer.name="arun";
console.log(customer);