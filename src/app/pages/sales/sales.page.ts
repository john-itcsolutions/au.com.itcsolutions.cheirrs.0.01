import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

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
      value: '/menu/sales/agencyagreement',
      text: 'Agency Agreement',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {               
      id: '1',
      name: 'radio_list',
      value: '/menu/sales/shequreceiveapplication',
      text: 'Receive Shared Equity Application',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/sales/shequmakeoffertoapplicant',
      text: 'Make Offer to Shared Equity Applicant',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/sales/mortgageagreement',
      text: 'Enter Shared Equity Mortgage Agreement',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/sales/weblistings',
      text: 'Web Listings',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/sales/advsignage',
      text: 'Advertising and Signage',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/sales/openhouses',
      text: 'Open House Inspections Administration',
      disabled: false,
      checked: false,
      color: 'primary'
    }, { 
      id: '7',
      name: 'radio_list',
      value: '/menu/sales/privateinspections',
      text: 'Private Inspections Administration',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/sales/auctions',
      text: 'Auctions',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/sales/salestrustaccting',
      text: 'Sales Trust Accounting',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/sales/beforeexchange',
      text: 'Before Exchange of Contracts',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/sales/exchangecontracts',
      text: 'Exchange of Contracts',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/sales/betweenexchsettlement',
      text: 'Between Exchange & Settlement',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/sales/settlement',
      text: 'Settlement',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/sales/authoritytoaccount',
      text: 'Authority to Account',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/sales/salescommission',
      text: 'Sales Commission',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/sales/linktoconveyitsales',
      text: 'Link to convey-IT (skeleton Title Transfer Data)',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/sales/keyregistersales',
      text: 'Key Register',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/sales/customercomplaint',
      text: 'Customer Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/sales/filingsales',
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