import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './features/properties/pages/buy-page/buy-page.component';
import { DetailPageComponent } from './features/properties/pages/detail-page/detail-page.component';
import { HomePageComponent } from './features/properties/pages/home-page/home-page.component';
import { LoanPageComponent } from './features/properties/pages/loan-page/loan-page.component';
import { RealtorPageComponent } from './features/realtor/components/pages/realtor-page/realtor-page.component';


const routes: Routes = [
  
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },

  {
    path: 'aluguel',
    component: LoanPageComponent
  },
  {
    path:'compra',
    component: BuyPageComponent
  },
  {
    path: 'corretor',
    component: RealtorPageComponent  
  },
  { path: 'imovel/:imovelId', component: DetailPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
