import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letting',
  templateUrl: './letting.page.html',
  styleUrls: ['./letting.page.scss'],
})
export class LettingPage implements OnInit {

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
      value: '/menu/letting/importregproptoletletting',
      text: 'Import & Register Property to Let',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/letting/registeragreementtoletletting',
      text: 'Register Letting Agreement Type',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/letting/searchpropsletting',
      text: 'Search Properties',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/letting/searchproptxletting',
      text: 'Search Property Transactions',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/letting/searchownersletting',
      text: 'Search Owners by Name or Property Address',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/letting/searchrepairsmainthistbypropletting',
      text: 'Search Repairs & Maintenance Histories of Properties',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/letting/searchextenantsofproperty',
      text: 'Search ex-Tenants of Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/letting/regapplicationforlease',
      text: 'Register Application for Lease',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/letting/accessanddemand',
      text: 'Access and Demand',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/letting/checkapplicantsbackgroundbyproperty',
      text: 'Check Applicants',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/letting/allocations',
      text: 'Allocations',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/letting/offertotenant',
      text: 'Make Offer to Lease Applicant',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/letting/signlease',
      text: 'Sign Lease for Rental of Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/letting/chargebondandrentinadvance',
      text: 'Charge Bond & Rent in Advance',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/letting/receivebondandrent',
      text: 'Receive Bond & Rent',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/letting/issuebondrentreceipts',
      text: 'Issue Initial Bond & Rent Receipts',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/letting/setuprentcharging',
      text: 'Set Up Regular Rent Charging',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/letting/issuerentreceipts',
      text: 'Issue Rent Receipts',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/letting/keyregisterletting',
      text: 'Key Register',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/letting/leaseapplicantcomplaint',
      text: 'Lease Applicant Complaint',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '20',
      name: 'radio_list',
      value: '/menu/letting/filingletting',
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
