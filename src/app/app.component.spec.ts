import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CartModule} from './cart/cart.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[  CartModule,],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

});
