import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'cart-actions',
  templateUrl: './cart-actions.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartActionsComponent {
  @Input() products: Product[];
  @Input() selectedProduct: Product;
  @Output() productChange: EventEmitter<Product> = new EventEmitter();
  @Output() addItem: EventEmitter<Product> = new EventEmitter();

  public onProductChange(product: Product) {
    this.productChange.emit(product);
  }
  public onAddItem(selectedQuantity) {
    const product = Object.assign({}, this.selectedProduct);
    product.productQuantity = +selectedQuantity;
    this.addItem.emit(product);
  }
}
