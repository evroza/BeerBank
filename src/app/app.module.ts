import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { BeerItemsComponent } from './partials/beer-items/beer-items.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BeerModalComponent } from './partials/beer-modal/beer-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FavouriteComponent,
    BeerItemsComponent,
    BeerModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [
    BeerModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
