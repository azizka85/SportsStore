import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { ModelModule } from "../model/model.module";
import { CartDetailComponent } from "./cartDetail.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CheckoutComponent } from "./checkout.component";
import { CounterDirective } from "./counter.directive";
import { StoreComponent } from "./store.component";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent,
    CartDetailComponent, CheckoutComponent],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule {}
