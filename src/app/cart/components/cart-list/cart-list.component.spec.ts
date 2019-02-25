import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';


import { MaterialModule } from 'src/app/material.module';
import { of } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { HttpErrorHandler } from '../../services/http-error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartListComponent } from './cart-list.component';


class MockHttp {
  get() {
    return of([]);
  }
}
describe('WarrantsComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CartService,
        { provide: HttpClient, useClass: MockHttp },
        HttpErrorHandler
      ],
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [ CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
