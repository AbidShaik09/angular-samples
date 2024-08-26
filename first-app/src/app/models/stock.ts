export class Stock {
    code?:string;
    name?:string;
    initialPrice?:number;
    faceValue?:number;
    public  toString():string{
        return `${this.code}${this.name}${this.initialPrice}${this.faceValue}`
    }
}
