export class Pattern {
  public id: number;
  public videoPath: string;
  public productName: string;

  constructor(id: number, videoPath: string, productName: string) {
    this.id = id;
    this.videoPath = videoPath;
    this.productName = productName;
  }
}
