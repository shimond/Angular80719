import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsEditInsertContainerComponent } from './products-edit-insert-container/products-edit-insert-container.component';


const routes: Routes = [
    { path: 'products', component: ProductsHomeComponent },
    { path: 'edit/:productId', component: ProductsEditInsertContainerComponent },
    { path: 'insert', component: ProductsEditInsertContainerComponent },
    { path: '', pathMatch: 'full', redirectTo: 'products' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

