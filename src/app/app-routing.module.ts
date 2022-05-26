import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoCompareComponent } from './photo-compare/photo-compare.component';


const routes: Routes = [{path:'', component: PhotoCompareComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
