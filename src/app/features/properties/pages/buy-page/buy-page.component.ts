import { Component, Input, OnInit, Output } from '@angular/core';
import { Property } from '../../components/models/property.model';
import { PropertyService } from '../../service/property.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss']
})
export class BuyPageComponent implements OnInit {

  imoveis: Array<Property> = [];

 
   constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.imoveis = this.propertyService.filteredBuyList;

  }

}
