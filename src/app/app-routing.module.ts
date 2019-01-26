import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'favourite', component: FavouriteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
