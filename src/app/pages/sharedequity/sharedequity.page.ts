import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharedequity',
  templateUrl: './sharedequity.page.html',
  styleUrls: ['./sharedequity.page.scss'],
})
export class SharedequityPage implements OnInit {

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
      value: '/menu/sharedequity/shequregistershequitymtgageagrmnt',
      text: 'Register Shared Equity Mortgage Agreement Type',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/sharedequity/receiveshequmortgepayment',
      text: 'Receive Shared Equity Mortgage Payment',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/sharedequity/issuereceiptmtgepaymntshequ',
      text: 'Issue Receipt - Shared Equity Mortgage Payment',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/sharedequity/refinanceshequmtge',
      text: 'Refinance Shared Equity Mortgage',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/sharedequity/closemtgeagrmntshequ',
      text: 'Close Mortgage Agreement',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/sharedequity/contactbyshequowner',
      text: 'Contact by Shared Equity Customer',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/sharedequity/complaintbyshequowners',
      text: 'Complaint by Shared Equity Owners',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/sharedequity/complaintagainstshequowners',
      text: 'Complaint Against Shared Equity Owners',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/sharedequity/corroandcommswithshequowner',
      text: 'Correspondence & Communications with Shared Equity Owner(s)',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/sharedequity/searchshequownersbyproperty',
      text: 'Search Shared Equity Owners by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/sharedequity/searchshequownersbyname',
      text: 'Search Shared Equity Owners by Name',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/sharedequity/searchdocsbyshequowner',
      text: 'Search Documents by Shared Equity Owner',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/sharedequity/searchdocsbyshequproperty',
      text: 'Search Documents by Shared Equity Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/sharedequity/filingshequ',
      text: 'Filing',
      disabled: false,
      checked: false,
      color: 'secondary'
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