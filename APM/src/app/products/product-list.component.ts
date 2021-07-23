/*=============================================
IMPORTS
=============================================*/

import { Component, OnDestroy } from "@angular/core";
import { IProduct } from "./product";
import { OnInit } from "@angular/core"
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";

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
export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle: string  = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errMessage: string = ''
    sub!: Subscription

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

    /* ngOnInit is a built in Angular lifecycle method that executes the following
        code upon page load. Inside the .subscribe method is an object known as an
        Observer object. */
      ngOnInit(): void {
          this.sub = this.productService.getProducts().subscribe({
            next: products =>  { 
                this.products = products;
                this.filteredProducts = this.products
            },
            error: err => this.errMessage = err
          })
      }

      ngOnDestroy() {
        this.sub.unsubscribe()
      }

      onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
      }
}