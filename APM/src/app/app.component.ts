// IMPORT FROM ANGULAR: 

import { Component } from "@angular/core";

// DECORATOR:
@Component({
  // the selector is the name of the component when referenced in HTML, in this case, will be called <pm-root>:
  selector: 'pm-root',
  // HTML structure for the class "inline template":
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
</div>
  `
})

// CLASS:
export class AppComponent {
  pageTitle: string = "Acme Product Management";
}