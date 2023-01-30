export interface CartModel {
    readonly id: number;
    readonly products: Product[];
  }
  
  export interface Product{
    readonly productId: number;
    readonly quantity: number;
  }