/*=============================================
IMPORTS
=============================================*/

import { Component } from "@angular/core";
import { IProduct } from "./product";
import { OnInit } from "@angular/core"
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { ProductService } from "./product.service";

/*=============================================
DECORATOR / TEMPLATE
=============================================*/

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"],
})

/*=============================================
CLASS
=============================================*/

// this class is exported, and ProductListComponent is in the array in our app.module.ts file
// as a declaration, so our module knows to reference this
export class ProductListComponent implements OnInit {
    pageTitle: string  = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    // "private" is a "backing variable", designed to hold the value managed by the getter and setter
    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter
    }

    set listFilter(value: string) {
        this._listFilter = value;
        console.log("In setter:", value); 
        this.filteredProducts = this.performFilter(value)
    }

    filteredProducts: IProduct[] = []

    products: IProduct[] = [];
      // METHODS GO DOWN HERE:

      constructor(private productService: ProductService) {}

      performFilter(filterBy: string): IProduct[] {
          filterBy = filterBy.toLocaleLowerCase();
          return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().includes(filterBy)
          )
      }

      toggleImage(): void {
          this.showImage = !this.showImage;
      }

      ngOnInit(): void {
          console.log("OnInit logging")
          this.products = this.productService.getProducts()
          this.filteredProducts = this.products
      }

      onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
      }
}