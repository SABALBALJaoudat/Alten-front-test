import { Component, OnInit } from '@angular/core';
import { Product } from 'app/model/product.model';
import { ProductService } from 'app/service/product.service';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

    products: Product[];

    selectedProducts: Product[] = [];

    statuses: SelectItem[];

    loading: boolean = true;

    clonedProducts: { [s: string]: Product; } = {};

    constructor(private productService: ProductService, private messageService: MessageService) { }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.loading=false;
    }

    onRowEditInit(product: Product) {
        this.clonedProducts[product.id] = {...product};
    }

    onRowEditSave(product: Product) {
        if (product.price > 0) {
            delete this.clonedProducts[product.id];
            this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
        }  
        else {
            this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
        }
    }

    onRowEditCancel(product: Product, index: number) {
        this.products[index] = this.clonedProducts[product.id];
        delete this.products[product.id];
    }

    onDelete(product: Product) {
        delete this.products[product.id];
    }

    addNewProduct() {
        const newId = this.generateUniqueId();
        const newCode = this.generateUniqueCode();
        console.log(newId);
        const newProduct: Product = {
            id: newId,
            code: newCode,
            name: 'Nouveau produit',
            description: 'C est un test',
        };

        this.products = [newProduct, ...this.products];
    }

    generateUniqueId(): string {
        const number = Math.floor(Math.random() * 9000) + 1000;
        return number.toString();
    }

    generateUniqueCode(): string {
        return Math.random().toString(16).slice(2);
    }

    deleteSelectedProducts() {
    if (this.selectedProducts && this.selectedProducts.length > 0) {
        this.products = this.products.filter(prod => !this.selectedProducts.includes(prod));
        this.selectedProducts = [];
    }
}
}
