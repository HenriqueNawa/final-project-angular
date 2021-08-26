import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})

export class PropertiesListComponent implements OnInit {


  @Input()
  imoveis: Array<Property> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirecionar(id: number){
    console.log(id)
    this.router.navigate([`/imovel/${id}`])
  }

  
  

}
