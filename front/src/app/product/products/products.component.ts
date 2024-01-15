import { Component } from '@angular/core';
import { Product } from 'app/model/product.model';
import { ProductService } from 'app/service/product.service';
// import { PrimeNGConfig } from 'primeng/api/primengconfig';
import { SelectItem } from 'primeng/api/selectitem';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[];

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

  constructor(private _productService: ProductService) {
  }

    ngOnInit() {
        this._productService.getProducts().then(data => this.products = data);

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];

        // this.primengConfig.ripple = true;
    }
    
    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

}
