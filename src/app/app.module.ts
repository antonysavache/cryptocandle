import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeReviewComponent } from './main/pages/exchange-review/exchange-review.component';
import { ProsAndConsComponent } from './main/components/pros-and-cons/pros-and-cons.component';
import { SimpleBoxComponent } from './main/components/simple-box/simple-box.component';
import { RatingAsideComponent } from './main/components/rating-aside/rating-aside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoColumnTableComponent } from './main/components/two-column-table/two-column-table.component';
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from './main/pages/home/home.component';
import { ExchangesComponent } from './main/pages/exchanges/exchanges.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeReviewComponent,
    ProsAndConsComponent,
    SimpleBoxComponent,
    RatingAsideComponent,
    TwoColumnTableComponent,
    HomeComponent,
    ExchangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
