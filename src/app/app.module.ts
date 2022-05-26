import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { PhotoCompareService } from './photo-compare/photo-compare.service';
import {PhotoCompareComponent} from './photo-compare/photo-compare.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  
  declarations: [
    AppComponent,
    PhotoCompareComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule
    ],

  providers: [PhotoCompareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
