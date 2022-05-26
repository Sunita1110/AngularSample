import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PhotoCompareService {

  constructor(private http: HttpClient) {}

  fetchPhotos(): Observable<Object> {
         return this.http.get('https://jsonplaceholder.typicode.com/photos');

  }

}
