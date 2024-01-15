import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsAdminComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    ButtonModule,
    PaginatorModule,
    FormsModule
  ],
  exports: [
    ProductsComponent,
    ProductsAdminComponent
  ]
})
export class ProductModule { }
