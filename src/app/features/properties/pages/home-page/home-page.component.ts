import { Component, OnInit } from '@angular/core';
import { Property } from '../../components/models/property.model';
import { PropertyService } from '../../service/property.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  imoveis: Array<Property> = [];


  constructor(private propertyService: PropertyService) { 
  }

  ngOnInit(): void {
    this.imoveis = this.propertyService.getProperty();

  }

}
