import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenancymngmnt',
  templateUrl: './tenancymngmnt.page.html',
  styleUrls: ['./tenancymngmnt.page.scss'],
})
export class TenancymngmntPage implements OnInit {

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
      value: '/menu/tenancymngmnt/keyregistertenmngmnt',
      text: 'Key Register',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/propertyinspections',
      text: 'Property Inspections',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/maintreqtenmngmnt',
      text: 'Maintenance Request',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/reportdamagebytenant',
      text: 'Report Damage by Tenant',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/reportpropcareissues',
      text: 'Report Property Care Issues',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/reportabandonedpremises',
      text: 'Report Abandoned Premises',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/complaint',
      text: 'Report Neighbour/Police Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/complaintbytenant',
      text: 'Complaint by Tenant',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/corroandcommswithtenant',
      text: 'Correspondence & Communications with Tenant',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/searchtenantsbyproptenmngmnt',
      text: 'Search Tenants by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/searchtenantsledgerbytenant',
      text: 'Search Tenants Ledger by Tenant',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/searchdocsbytenant',
      text: 'Search Documents by Tenant',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/newarrearsagreement',
      text: 'New Arrears Agreement',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/renegotiatearrearsagreement',
      text: 'Renegotiate Arrears Agreement',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/arrearssagreementsbytenant',
      text: 'Arrears Agreements by Tenant',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/recordactionsfortribhrng',
      text: 'Record Actions for Tribunal',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/preparefortribunal',
      text: 'Prepare for Tribunal',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/reportaftertribunal',
      text: 'Report after Tribunal',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/specificperformanceordersbytenant',
      text: 'Specific Performance Orders by Tenant',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/tenancymngmnt/filingten',
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