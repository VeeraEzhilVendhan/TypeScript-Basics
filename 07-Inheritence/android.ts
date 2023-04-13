import { mobileBaseClass } from "./mobile";
export class AndroidClass extends mobileBaseClass{

    constructor(private _touchScreen1:boolean, private _networkGen1:string, private _version:string){
        super(_touchScreen1,_networkGen1);
    }

    public get version():string{
        return this._version;
    }

    public set version(version:string){
        this._version=version;
    }

    getInfo(): string {
        return super.getInfo()+`, Android Version - ${this._version}`;
    }

}