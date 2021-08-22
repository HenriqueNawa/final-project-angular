import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RealtorComponent } from './components/realtor/realtor.component';
import { RealtorListComponent } from './components/realtor-list/realtor-list.component';
import {MatTableModule} from '@angular/material/table';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { RealtorPageComponent } from './components/pages/realtor-page/realtor-page.component';



@NgModule({
  declarations: [
    RealtorComponent, RealtorListComponent, RealtorPageComponent, 
  ],
  imports: [
    CommonModule, SharedModule, MatTableModule,ClipboardModule
  ]

})
export class RealtorModule { }
