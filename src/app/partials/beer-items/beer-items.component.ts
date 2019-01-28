import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/punk-api/api.service';
import { BeerItem } from 'src/app/models/beer-item-interface';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BeerModalComponent } from '../beer-modal/beer-modal.component';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-items.component.html',
  styleUrls: ['./beer-items.component.scss']
})
export class BeerItemsComponent implements OnInit {
  private currentPage: number = 1; // last queried page
  private beers: BeerItem[]; // Array of beers
  private errorMessage: any; // Error object returned in case of call to api fails
  private bsModalRef: BsModalRef;

  constructor(private api: ApiService, private modalService: BsModalService) { }

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

  /**
   * Triggered when a single beer item is clicked on the page
   * Opens the Beer modal with more details about the selected beer.
   */
  openModalWithComponent(beer: BeerItem) {
    const initialState = {
      beer,
      title: 'Modal with component'
    };
    console.log(beer);
    
    this.bsModalRef = this.modalService.show(BeerModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

    this.bsModalRef.setClass("modal-lg");
  }

}
