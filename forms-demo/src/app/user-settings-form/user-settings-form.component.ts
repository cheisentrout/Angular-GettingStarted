import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  // This class property adheres to the custom type of the UserSettings interface!
  originalUserSettings: UserSettings = {
    name: "Clare",
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: "some test notes!"
  }

  userSettings: UserSettings = { ...this.originalUserSettings }

  constructor() { }

  ngOnInit(): void {
  }

}
