class Customer{

    private _name: string;
    private _id:number;

    constructor(name:string,id:number){
        this._name=name;
        this._id=id;
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
