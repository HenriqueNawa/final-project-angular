import { Component, Input, OnInit } from '@angular/core';
import { Realtor } from '../models/realtor.model';

@Component({
  selector: 'app-realtor',
  templateUrl: './realtor.component.html',
  styleUrls: ['./realtor.component.scss']
})
export class RealtorComponent implements OnInit {

  corretores: Array<Realtor> = [
    {
      id: 1,
      creci: 'aaaaa',
      name: 'Henrique Nawa',
      phone: '1212345678',
      email: 'abc@email.com'
    },
    {
      id: 2,
      creci: 'bbbbb',
      name: 'Maria Silva',
      phone: '2199999999',
      email: 'maria@email.com'
    },{
      id: 3,
      creci: 'sasdsad',
      name: 'João Pereira',
      phone: '1211111111',
      email: 'joao@email.com'
    },
    {
      id: 4,
      creci: 'mmdsdsa',
      name: 'Luis Andrade',
      phone: '1222222222',
      email: 'luis@email.com'
    },
    {
      id: 5,
      creci: 'llllll',
      name: 'Ana Silva',
      phone: '1233333333',
      email: 'ana@email.com'
    },
    {
      id: 6,
      creci: '33333',
      name: 'Aline Sousa',
      phone: '1298765432',
      email: 'aline@email.com'
    }

  ]

  @Input()
  corretor?: Realtor;

  constructor() { }

  ngOnInit(): void {
  }

}
