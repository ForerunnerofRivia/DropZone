export class Item{
    name:string;
    imagePath:string;
    description:string;
    ref:string;
    price:number;

    constructor(name:string,imagePath:string,description:string,ref:string,price:number) {
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
        this.ref = ref;
        this.price = price;
    }
}