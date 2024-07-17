import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get('assets/data/cards.json');
  }

  getTestimonials(): Observable<any> {
    return this.http.get('assets/data/testimonials.json');
}
}