import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnChanges {
  cartTotal=0;
  @Input() cartItems: Product[] = [];
  @Output() select: EventEmitter<Product> = new EventEmitter();
  @Output() delete: EventEmitter<Product> = new EventEmitter();


  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    this.computeTotal();
  }
  public onDelete(product) {
    this.delete.emit(product);
  }
  public onItemSelect(product) {
    this.select.emit(product);
  }
  private computeTotal() {
   this.cartTotal=0;
    const reducer = (accumulator, product: Product) => accumulator + product.productPrice*product.productQuantity;
    this.cartTotal = this.cartItems.reduce(reducer,  this.cartTotal);
  }


}
