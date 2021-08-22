import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PhonePipe } from './components/pipes/phone.pipe';

const components = [
  HeaderComponent,FooterComponent
]

const pipes = [PhonePipe]

@NgModule({
  declarations: [...components, ...pipes],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ...components,
    ...pipes
  ]
})
export class SharedModule { }
