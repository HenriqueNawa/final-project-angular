import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from './shared/shared.module';
import { PropertiesModule } from './features/properties/properties.module';
import { RealtorModule } from './features/realtor/realtor.module';
import { PropertyService } from './features/properties/service/property.service';
import {GalleriaModule} from 'primeng/galleria';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const components = [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule, 
    SharedModule, 
    PropertiesModule, 
    RealtorModule, 
    GalleriaModule,
    
  
]

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    ...components,
    NgbModule
  ],
  
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
