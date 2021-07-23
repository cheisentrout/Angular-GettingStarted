// IMPORT FROM ANGULAR: 

import { Component } from "@angular/core";

// DECORATOR:
@Component({
  // the selector is the name of the component when referenced in HTML, in this case, will be called <pm-root>:
  selector: 'pm-root',
  // HTML structure for the class "inline template":
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
            <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
            <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
        </ul>
    </nav>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  `
})

// CLASS:
export class AppComponent {
  pageTitle: string = "Acme Product Management";
}