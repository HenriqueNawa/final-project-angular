import { Component, OnInit } from '@angular/core';
import { Property } from '../../components/models/property.model';
import { PropertyService } from '../../service/property.service';

@Component({
  templateUrl: './loan-page.component.html',
  styleUrls: ['./loan-page.component.scss']
})
export class LoanPageComponent implements OnInit {

  imoveis: Array<Property> = [];

  constructor(private propertyService : PropertyService) { }

  ngOnInit(): void {
    this.imoveis=this.propertyService.filteredLoanList;
  }

}
