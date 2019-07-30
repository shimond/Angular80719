import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent  {
    title = 'useForms';
    
}
