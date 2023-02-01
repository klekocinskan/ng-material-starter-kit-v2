export interface ProductModel {
  readonly id: number;
  readonly title: string;
  readonly description: string;
}

export interface ProductModelEdit{
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
}
