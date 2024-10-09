import { Component, Input, OnChanges, OnDestroy, SimpleChanges, inject } from '@angular/core';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { map, Observable, of, Subscription, switchMap } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../service/product.service';
import { ReviewService } from '../../service/ReviewService/review.service';


@Component({
  selector: 'co-product-detail',
  templateUrl: './product-detail.component.html',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe]
})
export class ProductDetailComponent implements OnChanges{
  
  @Input() productId: number = 0;
  errorMessage = '';
  // Product to display
  product: Product | null = null;
  productService = inject(ProductService)
  reviewService = inject(ReviewService)

  // Set the page title
  pageTitle = this.product ? `Product Detail for: ${this.product.productName}` : 'Product Detail';

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['productId']) {
      let id = this.productId
      //let id = changes['productId'].currentValue;
      this.productService.getProductById(id).
      pipe(
        switchMap(product => this.getProductWithReviews(product))
      )
      .subscribe(p => this.product = p)
    }
  }
  
  getProductWithReviews(product: Product): Observable<Product>{
    if(product.hasReviews){
      return this.reviewService.getReviewsByProductId(product.id).
      pipe(
        map(reviews => ({...product, reviews})) // maintains immutability
        // map(reviews => (product.reviews = reviews))
      );
    }
    else {
      return of(product);
    }
  }


  addToCart(product: Product) {
  }
}
