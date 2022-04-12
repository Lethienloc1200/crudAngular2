export class Phone {
  id: number;
  title: string;
  description: string;
  price: string;
  type: string;
  discount: string;
  image: string;
  color: string;
  config: string;
  constructor(params: any) {
    this.id = params.id;
    this.title = params.title;
    this.description = params.description;
    this.price = params.price;
    this.image = params.image;
    this.type = params.type;
    this.discount = params.discount;
    this.color = params.category?.name;
    this.config = params.selected;
  }
}
