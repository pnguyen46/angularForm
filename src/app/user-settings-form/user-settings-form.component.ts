import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-setting';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  pageTitle: string = 'Basic Angular Form';

  originalUserSettings: IUserSettings = {
    name: "Tron",
    emailOffers: true,
    interfaceStyle: "dark",
    subscriptionType: "Annual",
    notes: "random texts for testing"
  };

  userSettings : IUserSettings = {...this.originalUserSettings};
  
  constructor() { }

  ngOnInit() {
  }

}
