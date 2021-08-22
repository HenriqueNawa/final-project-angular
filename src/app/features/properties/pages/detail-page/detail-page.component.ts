import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Property } from '../../components/models/property.model';
import { PropertyService } from '../../service/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  
  @Input()
  imoveis: Array<Property> = [];

  imovel: Property|undefined;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) { }

  
  ngOnInit(): void {
    this.imoveis = this.propertyService.getProperty();
    const routeParams = this.route.snapshot.paramMap;
    const imovelIdFromRoute = Number(routeParams.get('imovelId'));
    this.imovel = this.imoveis.find(idImovel => idImovel.id === imovelIdFromRoute);
  }

}
