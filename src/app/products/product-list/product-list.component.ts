import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Subscription, tap } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'co-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, ProductDetailComponent]
})
export class ProductListComponent {
  pageTitle = 'Products';
  errorMessage = '';
  sub!: Subscription;

  // Products
  products: Product[] = [];

  productService = inject(ProductService)

  // Selected product id to highlight the entry
  selectedProductId: number = 0;

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => this.products = res)
  }
 

  onSelected(productId: number): void {
    this.selectedProductId = productId;
    
  }
}
