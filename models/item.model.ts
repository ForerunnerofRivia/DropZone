export class Item{
    name:string;
    imagePath:string;
    description:string;
    ref:string;
    price:number;
    stock?:number;
    solde?:string;
    loweredPrice?:number;

    constructor(name:string,imagePath:string,description:string,ref:string,price:number, stock?:number, solde?:string, loweredPrice?:number) {
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
        this.ref = ref;
        this.price = price;
        this.stock = stock;
        this.solde = solde;
        this.loweredPrice = loweredPrice;
    }
}