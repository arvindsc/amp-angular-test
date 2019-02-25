import { Component, OnInit } from "@angular/core";
import { Product } from "../models/products.model";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "cart.component.html",
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product;
  cartItems: Product[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this._fetchProducts();
  }
  private _fetchProducts() {
    this.cartService
      .getProducts()
      .subscribe((products: Product[]) => (this.products = products));
  }
  public onProductChange(product) {
    this.selectedProduct = product;
  }
  public onCartAdd(product: Product) {
    console.log(product);
    const selectedProduct = this.cartItems.find(
      p => p.productId === product.productId
    );
    if (!selectedProduct) {
      this.cartItems.push(product);
    } else {
      this.cartItems = this.cartItems.map((item:Product)  => {
        if (item.productId === product.productId) {
          item.productQuantity += product.productQuantity;
        }
        return item;
      });
    }
  }
  public onCartItemDelete(product: Product) {
    this.cartItems = this.cartItems.filter(item=>item.productId!==product.productId);
  }
  public onCartItemUpdate(product: Product) { }
  public onCartItemSelect(product: Product) { }
}
