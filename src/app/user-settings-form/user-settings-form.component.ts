import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { IUserSettings } from '../data/user-setting';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  pageTitle: string = 'Basic Angular Form';

  originalUserSettings: IUserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings : IUserSettings = {...this.originalUserSettings};
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ',form.valid);
  }

  onBlur(field: NgModel){
    console.log('in onBlur: ',field.valid);
  }

}
