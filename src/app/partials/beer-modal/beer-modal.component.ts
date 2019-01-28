import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BeerItem } from 'src/app/models/beer-item-interface';

@Component({
  selector: 'app-beer-modal',
  templateUrl: './beer-modal.component.html',
  styleUrls: ['./beer-modal.component.scss']
})
export class BeerModalComponent implements OnInit {

  public beer: BeerItem;
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {}

}
