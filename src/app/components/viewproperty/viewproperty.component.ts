import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
interface Tenant {
  value: string;
  viewValue: string;
}

interface Add{
  value: string;
  viewValue: string;
}

interface Category{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.component.html',
  styleUrls: ['./viewproperty.component.css']
})
export class ViewpropertyComponent {

  disableSelect = new FormControl(false);

  tenants: Tenant[] = [
    {value: 'add tenant', viewValue: 'Add tenant'},
    {value: 'see tenant', viewValue: 'See tenant'},
  ];

  adds: Add[] = [
    {value: 'add property', viewValue: 'Add property'},
    {value: 'see property', viewValue: 'See property'},
  ];

  categories: Add[] = [
    {value: 'rooms', viewValue: 'Rooms'},
    {value: 'households', viewValue: 'Households'},
    {value: 'business premises', viewValue: 'Business premises'},
    {value: 'departaments', viewValue: 'Departaments'},
  ];

  selectedValue: any;


}
