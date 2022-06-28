import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeReviewComponent } from './main/pages/exchange-review/exchange-review.component';
import { HomeComponent } from "./main/pages/home/home.component";
import { ExchangesComponent } from "./main/pages/exchanges/exchanges.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'exchanges',
    component: ExchangesComponent
  },
  {
    path: 'exchanges/:id',
    component: ExchangeReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
