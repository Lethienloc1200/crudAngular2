export class LapTop {
  id: number;
  title: string;
  description: string;
  price: string;
  type: string;
  discount: string;
  image: string;
  core: string;
  constructor(params: any) {
    this.id = params.id;
    this.title = params.title;
    this.description = params.description;
    this.price = params.price;
    this.image = params.image;
    this.type = params.type;
    this.discount = params.discount;
    this.core = params.core;
  }
}
