import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-llordsinvstrs',
  templateUrl: './llordsinvstrs.page.html',
  styleUrls: ['./llordsinvstrs.page.scss'],
})
export class LlordsinvstrsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  defaultSelectedRadio = "radio_2";
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;
 
  radio_list = [
    {
      id: '0',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/landlordsinterface',
      text: 'Landlord Private Interface',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/registerllords',
      text: 'Register Owners of Property to Let',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/registeragreementtolet',
      text: 'Register Agreement to Let Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/registerotheragreement',
      text: 'Register Other Agency Agreement',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/searchownersllords',
      text: 'Search Owner by Name or Address of Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/importregpropertytolet',
      text: 'Import & Register Property to Let',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/searchrepmainthistbypropllords',
      text: 'Search Repairs & Maintenance Histories of Properties',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/schmtchlandlordstenantsllordspage',
      text: 'Search/Match Landlords to Tenants',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/searchacctsrecordsbypropllordspage',
      text: 'Search Accounts Records by Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/searchdocsbypropllordspage',
      text: 'Search Documents by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/schmatchinvestorstoprops',
      text: 'Search/Match Investors to Properties',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/marketvaluebyproperty',
      text: 'Market Value by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/rentalvaluebyproperty',
      text: 'Rental Value by Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/amenitiesbyproperty',
      text: 'Amenities by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/searchextenantsofproperty',
      text: 'Search Ex-Tenants',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/linktoconveyit',
      text: 'Link to convey-IT (skeleton Title Transfer Data)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/keyregisterllords',
      text: 'Key Register',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/llordinvestorcomplaint',
      text: 'Landlord/Investor Complaint',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/llordsinvstrs/filingllords',
      text: 'Filing',
      disabled: false,
      checked: false,
      color: 'primary'
    }
  ];
 
  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail);
    this.selectedRadioGroup = event.detail;
  }
 
  radioFocus() {
    console.log("radioFocus");
  }
  radioSelect(event) {
    console.log("radioSelect",event.detail);
    this.selectedRadioItem = event.detail;
  }
  radioBlur() {
    console.log("radioBlur");
  }
 
}