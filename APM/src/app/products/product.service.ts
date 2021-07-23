/*=====================================================
THIS IS A SERVICE FILE
It stores information that components can retrieve,
and render.
=====================================================*/

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs"
import { catchError, tap } from "rxjs/operators"
import { IProduct } from './product'

/*  The "providedIn" property set to 'root' makes this service 
available throughout the entire app, not constrained to one component */
@Injectable({
    providedIn: 'root'
}) 

export class ProductService {
    /* This variable is here to tell the service where to look
        to find the api - could be a local json file that is read
        when Angular's server is started, or can be an external web
        API link:*/
    private productUrl = "api/products/products.json";

    constructor(private http: HttpClient) {}
    /* getProducts is a function that now makes an HTTP request,
        and the return value of the function will be an Observale
        in the type of an array of IProducts. */
    getProducts(): Observable<IProduct[]> {
        /* the get request will return data in the "generic parameter"
            (enclosed in <>) of an array of IProduts - it will call
            this class's productUrl variable */
        return this.http.get<IProduct[]>(this.productUrl)
            .pipe(
                tap(data => console.log("All: ", JSON.stringify(data))),
                catchError(this.handleError)
            )
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}