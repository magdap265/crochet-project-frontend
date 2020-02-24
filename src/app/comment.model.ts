export class Comment {
  public id: number;
  public username: string;
  public rating: number;
  public opinion: string;
  public productName: string;
  public imagePath: string;

  constructor(id: number, username: string, rating: number, opinion: string, productName: string, imagePath: string) {
    this.id = id;
    this.username = username;
    this.rating = rating;
    this.opinion = opinion;
    this.productName = productName;
    this.imagePath = imagePath;
  }
}
