import { Component , OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PhotoCompareService } from './photo-compare.service';

@Component({
  selector: 'photo-compare',
  templateUrl: './photo-compare.component.html',
  styleUrls: ['./photo-compare.scss']
})
export class PhotoCompareComponent implements OnInit{
  title = 'AngularDeveloperAssignmnet';
  listPhotos: any;
 
  hideme=[];
  photosForComp: any[]= [];

 constructor(private photoservice: PhotoCompareService){
  }

  ngOnInit() {
    this.listphotos();
  }

 
  listphotos(){
   this.listPhotos =  this.photoservice.fetchPhotos();
  }
  

 addToCompareList(item: any){
   console.log(item);
   this.photosForComp.push(item);   
   
  
  }

  removePhoto(item: any){
    let index = this.photosForComp.findIndex(
      x => x.id == item.id 
    );
    this.photosForComp.splice(index, 1);
   
  }
  

}

