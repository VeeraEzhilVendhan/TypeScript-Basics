export class mobileBaseClass{

    constructor(private _touchScreen:boolean, private _networkGen:string){

    }

    public get touchScreen():boolean{
        return this._touchScreen;
    }

    public set touchScreen(tscreen:boolean){
        this._touchScreen=tscreen;
    }

    public get networkGen():string{
        return this._networkGen;
    }

    public set networkGen(network:string){
        this._networkGen=network;
    }

    getInfo():string{
        return `Touch Screen - ${this._touchScreen},  NetWork Generation - ${this._networkGen}`;
    }

}