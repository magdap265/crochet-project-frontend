export class Product {
    public id: number;
    public name: string;
    public productType: string;
    public color: string;
    public ropeSize: number;
    public description: string;
    public imagePath: string;
    public videoPath:string;

    constructor(id: number, name: string, pType: string, color: string, rSize: number, desc: string, imgPath: string, vPath:string){
        this.id = id;
        this.name = name;
        this.productType = pType;
        this.color = color;
        this.ropeSize = rSize;
        this.description = desc;
        this.imagePath = imgPath;
        this.videoPath = vPath;   }
}