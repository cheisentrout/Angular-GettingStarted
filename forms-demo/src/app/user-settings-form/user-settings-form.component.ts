import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
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

  /* Creating an original version of the user data, and then the typical version below,
  is one way to protect data in the case that a form is deleted, refreshed, or somehow loses
  its data before it's submitted. */
  userSettings: UserSettings = { ...this.originalUserSettings }

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(field: NgModel) {
    console.log("In onBlur: ", field.valid);
    
  }

  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.valid);
  }
}
