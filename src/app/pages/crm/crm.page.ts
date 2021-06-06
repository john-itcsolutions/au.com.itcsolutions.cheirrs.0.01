import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.page.html',
  styleUrls: ['./crm.page.scss'],
})
export class CrmPage implements OnInit {
  router: any;

  constructor(public any: Router){}

  ngOnInit() {
  }

  defaultSelectedRadio = "Registercustomer";
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;
 
  radio_list = [
    {
      id: '0',
      name: 'radio_list',
      value: '/menu/crm/tenantprivinterface',
      text: 'Tenant Private Interface',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/crm/registercustomer',
      text: 'Register Customer',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/crm/importregwebcustomer',
      text: 'Import & Register Web Customer',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/crm/searchcustomer',
      text: 'Search Customer Database',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/crm/searchcusttxes',
      text: 'Search Customer Transaction Database',
      disabled: false,
      checked: false,
      color: 'primary'
    },  {
      id: '5',
      name: 'radio_list',
      value: '/menu/crm/searchmatchbuyers',
      text: 'Search/Match Buyers to Properties',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/crm/searchsellers',
      text: 'Search Sellers',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/crm/searchownerscrm',
      text: 'Search Owners by Name or Property Address',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/crm/registerlead',
      text: 'Register Lead',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/crm/schmatchleadstoprops',
      text: 'Search/Match Leads to Properties',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/crm/schmchllordstotenants',
      text: 'Search/Match Landlords to Tenants',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/crm/schmtchinvestorstopropscrm',
      text: 'Search/Match Investors to Properties',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/crm/schmatchtenantstoprops',
      text: 'Search/Match Tenants to Properties',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/crm/advsignagecrm',
      text: 'Advertising & Signage',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/crm/marketnets',
      text: 'Marketing  to a Network',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/crm/openhouses',
      text: 'Open House Inspections Administration',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/crm/privateinspectionsadmincrm',
      text: 'Private Inspections Administration',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/crm/auctionsadmincrm',
      text: 'Auctions Administration',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/crm/supportagenciesandpartners',
      text: 'Support Agencies and Partners',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/crm/sharedequitycustomers',
      text: 'Shared Equity Customers',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '20',
      name: 'radio_list',
      value: '/menu/crm/customercomplaint',
      text: 'Customer Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '21',
      name: 'radio_list',
      value: '/menu/crm/filingcrm',
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