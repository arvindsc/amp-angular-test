import {HttpClient} from '@angular/common/http';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {of} from 'rxjs';
import * as products from '../../../../assets/data/products.json';
import {Product} from '../../models/products.model';
import {CartService} from '../../services/cart.service';
import {HttpErrorHandler} from '../../services/http-error-handler.service';
import {CartListComponent} from './cart-list.component';



class MockHttp {
  get() {
    return of([]);
  }
}
describe('WarrantsComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          providers: [CartService, {provide: HttpClient, useClass: MockHttp}, HttpErrorHandler],
          imports: [BrowserAnimationsModule],
          declarations: [CartListComponent]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate items in cart', () => {
    let items: any = products;
    component.cartItems = items.productsDetails as Array<Product>;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('tr').length).toBe(6);
  });

  it('should show zero sum for empty cart', () => {
    let items: any = products;
    component.cartItems = [];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('tr')[1].innerText).toBe('Cart is empty.');
    expect(fixture.nativeElement.querySelector('.card-footer').innerText).toContain('0.00');
  });

  it('should calculate corrent cart sum', () => {
    let items: any = products;
    component.cartItems = items.productsDetails as Array<Product>;
    component.cartItems[0].productQuantity = 5;
    component.computeTotal();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.card-footer').innerText).toContain('10.50');
  });
});
