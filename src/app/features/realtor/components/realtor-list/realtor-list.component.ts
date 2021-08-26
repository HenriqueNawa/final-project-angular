import { Component, Input, OnInit } from '@angular/core';
import { RealtorService } from '../../service/realtor.service';
import { Realtor } from '../models/realtor.model';

@Component({
  selector: 'app-realtor-list',
  templateUrl: './realtor-list.component.html',
  styleUrls: ['./realtor-list.component.scss']
})
export class RealtorListComponent implements OnInit {

  
  @Input()
  realtor: Array<Realtor> = [];


  constructor(private realtorService: RealtorService) { }

  ngOnInit(): void {
    this.realtor = this.realtorService.getRealtor();
  }

}
