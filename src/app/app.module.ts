import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExchangeReviewComponent} from './pages/exchange-review/exchange-review.component';
import {ProsAndConsComponent} from './components/pros-and-cons/pros-and-cons.component';
import {SimpleBoxComponent} from './components/simple-box/simple-box.component';
import {RatingAsideComponent} from './components/rating-aside/rating-aside.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { TwoColumnTableComponent } from './components/two-column-table/two-column-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeReviewComponent,
    ProsAndConsComponent,
    SimpleBoxComponent,
    RatingAsideComponent,
    TwoColumnTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
