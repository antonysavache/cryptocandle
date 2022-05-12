import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeReviewComponent } from './pages/exchange-review/exchange-review.component';

const routes: Routes = [
  {path: 'review',
  component: ExchangeReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
