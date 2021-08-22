import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../service/property.service';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input()
  imoveis: any[] = [];

  imovel: Property|undefined;

  imagens: any =[]


  constructor(private propertyService: PropertyService, private route: ActivatedRoute) { }

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];


  ngOnInit(): void {
    this.imoveis = this.propertyService.getProperty();
    const routeParams = this.route.snapshot.paramMap;
    const imovelIdFromRoute = Number(routeParams.get('imovelId'));
    this.imovel = this.imoveis.find(idImovel => idImovel.id === imovelIdFromRoute);
    this.imagens = this.imovel?.image;
  }


 

}
