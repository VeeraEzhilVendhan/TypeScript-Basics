class Customer{

    //since using typescript shortcut constructor variable declaration not required
    constructor(private _name:string,private _id:number){
        
    }

    public get name():string{
        return this._name;
    }

    public set name(name:string){
        this._name=name;
    }
    
    public get id():number{
        return this._id;
    }

    public set id(id:number){
        this._id=id;
    }

}

let customer=new Customer("arun",5);
console.log(customer.name);
console.log(customer.id);
console.log(customer);
//using getters and setters
customer.id=7;
customer.name="varun";
console.log(customer);
