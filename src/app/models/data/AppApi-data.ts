import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Product } from "../product";
import { Review } from "../review";
import { ProductData } from "./product-data";
import { ReviewData } from "./review-data";


export class AppApiData implements InMemoryDbService{
    
    createDb(): {products:Product[], reviews:Review[]} {
        const products = ProductData.products;
        const reviews = ReviewData.reviews; 

        return {products, reviews}; 
    }

}