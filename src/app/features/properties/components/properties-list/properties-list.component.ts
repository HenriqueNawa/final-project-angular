import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})

export class PropertiesListComponent implements OnInit {

  // imoveis: Array<Property> = [
  //   {
  //     id: 1,
  //     description: 'Casa 2 quartos, 1 banheiro, cozinha, sala',
  //     price: 1400,
  //     title: 'Casa São Gonçalo',
  //     status: 'ALUGUEL',
  //     image: ['https://www.decorfacil.com/wp-content/uploads/2017/03/20171011fachada-casa-simples-pequena-99-960x600.jpg']
  //   },
  //   {
  //     id: 2,
  //     description: 'Apartamento 1 quarto, 1 banheiro, cozinha, sala',
  //     price: 800000,
  //     title: 'App São Cristovao',
  //     status: 'COMPRA',
  //     image: ['https://www.showmetech.com.br/wp-content/uploads//2021/02/capa-dog.png']
  //   },
  //   {
  //     id: 3,
  //     description: 'Edicula 2 quarto, 1 banheiro, cozinha, sala',
  //     price: 700,
  //     title: 'edicula São pedro',
  //     status: 'ALUGUEL',
  //     image: [ 'https://www.decorfacil.com/wp-content/uploads/2017/03/20171011fachada-casa-simples-pequena-99-960x600.jpg']
  //   },
  //   {
  //     id: 4,
  //     description: 'Casa 2 quartos, 1 banheiro, cozinha, sala',
  //     price: 140000,
  //     title: 'Casa São Gonçalo',
  //     status: 'COMPRA', 
  //     image: ['https://s2.glbimg.com/l5tf5ALrBpZgm6SyiYv55yoUlh0=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/01/20/leve-e-iluminada-esta-casa-na-bahia-mistura-estrutura-metalica-madeira-e-vidro_9.jpg']
  //   },
  //   {
  //     id: 5,
  //     description: 'Kitnet 1 quartos, 1 banheiro, cozinha, sala',
  //     price: 700,
  //     title: 'Kitnet São Paulo',
  //     status: 'ALUGUEL',
  //     image: ['https://casa.abril.com.br/wp-content/uploads/2019/07/1-agra.jpg?quality=95&strip=info&w=1024']
  //   },

  // ];

  // filteredBuyList: Array<Property> = this.imoveis.filter(function (buy) {
  //   return buy.status == 'COMPRA'
  // } );

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
