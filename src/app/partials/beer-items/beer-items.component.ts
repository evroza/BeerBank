import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/punk-api/api.service';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-items.component.html',
  styleUrls: ['./beer-items.component.scss']
})
export class BeerItemsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
