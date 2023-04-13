import { mobileBaseClass } from "./mobile";

export class IphoneClass extends mobileBaseClass{


    constructor(private _touchScreen1:boolean, private _networkGen1:string, private _faceUnlock:boolean){
        super(_touchScreen1,_networkGen1);
    }

    public get faceUnlock(): boolean {
        return this._faceUnlock;
    }
    public set faceUnlock(value: boolean) {
        this._faceUnlock = value;
    }

    getInfo(): string {
        return super.getInfo()+`, Face Unlock available - ${this._faceUnlock}`;
    }


}