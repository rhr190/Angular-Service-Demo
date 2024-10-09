import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiURL = 'api/reviews';
  http = inject(HttpClient)

  constructor() { }

  getReviewsByProductId(productId: Number) : Observable<Review[]>
  {
    const reviewsURL = this.apiURL + '?productId='+productId;
    return this.http.get<Review[]>(reviewsURL);
  }
}
