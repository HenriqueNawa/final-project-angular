import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesListComponent } from './components/properties-list/properties-list.component';
import { MatCardModule } from '@angular/material/card';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { LoanPageComponent } from './pages/loan-page/loan-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { RealtorModule } from '../realtor/realtor.module';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { GalleriaModule } from 'primeng/galleria';


const components = [
  PropertiesListComponent,
  BuyPageComponent,
  LoanPageComponent,
  HomePageComponent,
  DetailPageComponent, 
  BuyPageComponent,
  ImageModalComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule, MatCardModule, SharedModule, MatGridListModule, RealtorModule, GalleriaModule
  ]
})
export class PropertiesModule { }
