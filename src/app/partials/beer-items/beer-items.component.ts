import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/punk-api/api.service';
import { BeerItem } from 'src/app/models/beer-item-interface';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-items.component.html',
  styleUrls: ['./beer-items.component.scss']
})
export class BeerItemsComponent implements OnInit {
  private currentPage: number = 1; // last queried page
  private beers: BeerItem[]; // Array of beers
  private errorMessage: any; // Error object returned in case of call to api fails

  constructor(private api: ApiService) { }

  ngOnInit() {
    // Fetch Currencies from API
    this.api.getBeers(this.currentPage, {})
        .subscribe(data => {
          this.beers=data;
                    
        },
        error => {
          this.errorMessage = error;
          console.error("Loading currencies from API failed", error);
        });
  }

}
