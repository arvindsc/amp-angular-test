import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { CartService } from './services/cart.service';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {CartActionsComponent} from './components/cart-actions/cart-actions.component';
import {CartListComponent} from './components/cart-list/cart-list.component';
import { CartComponent } from './components/cart.component';

@NgModule({
  imports: [ HttpClientModule, BrowserModule, NgbModule],
  exports: [CartComponent],
  declarations: [ CartComponent, CartListComponent, CartActionsComponent],
  providers: [CartService, HttpErrorHandler],
})
export class CartModule {}
