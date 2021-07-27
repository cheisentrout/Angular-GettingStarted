import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  // This class property adheres to the custom type of the UserSettings interface!
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }

  singleModel: string = "On"

  /* Creating an original version of the user data, and then the typical version below,
  is one way to protect data in the case that a form is deleted, refreshed, or somehow loses
  its data before it's submitted. */
  userSettings: UserSettings = { ...this.originalUserSettings }
  postError = false;
  postErrorMessage = ''
  subscriptionTypes : Observable<string[]> | undefined

  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onBlur(field: NgModel) {
    console.log("In onBlur: ", field.valid); 
  }

  onHttpError(errorResponse: any) {
    console.log("error: ", errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage
    
  }

  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.valid);

    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log("success: ", result)   ,
        error => console.log("error: ", error)   
      )
    } else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors"
    }
  }
}
