class Customer{

     //default access modifier is public - public name:string
     name:string;
     id:number;

    Customer(cusname:string, cusid:number){
        this.name=cusname;
        this.id=cusid;
    }

    public getName():string{
        return this.name;
    }

    public getId():number{
        return this.id;
    }

    public setId(cusid:number):void{
        this.id=cusid;
    }

    public setName(cusname:string):void{
        this.name=cusname;
    }
}

let customer=new Customer();
customer.id=5;
customer.name="arun";
console.log(customer);
customer.setId(6);
customer.setName("varun");
console.log(customer);