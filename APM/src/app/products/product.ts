/*=================================
PRODUCT INTERFACE
===================================
- This is a custom datatype
- It is used on the product-list.component.ts file
    to create a data structure for every product in 
    the products array.
==================================*/

export interface IProduct {
   productId: number;
   productName: string;
   productCode: string;
   releaseDate: string;
   price: number;
   description: string;
   starRating: number;
   imageUrl: string; 
}