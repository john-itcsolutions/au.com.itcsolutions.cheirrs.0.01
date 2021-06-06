import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assetmngmnt',
  templateUrl: './assetmngmnt.page.html',
  styleUrls: ['./assetmngmnt.page.scss'],
})
export class AssetmngmntPage implements OnInit {
  router: any;

  constructor(public any: Router){}


  ngOnInit() {
  }
  defaultSelectedRadio = "radio_list";
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;
 
  radio_list = [
    {
      id: '0',
      name: 'radio_list',
      value: '/menu/assetmngmnt/rollingassetmaintbudgets',
      text: 'Rolling Asset Maintenance Budgets',
      disabled: false,
      checked: false,
      color: 'primary'
    },{
      id: '1',
      name: 'radio_list',
      value: '/menu/assetmngmnt/maintenancescheduling',
      text: 'Maintenance Scheduling',
      disabled: false,
      checked: false,
      color: 'secondary'
    },{
      id: '2',
      name: 'radio_list',
      value: '/menu/assetmngmnt/propertyinspections',
      text: 'Property Inspections',
      disabled: false,
      checked: false,
      color: 'primary'
    },{
      id: '3',
      name: 'radio_list',
      value: '/menu/assetmngmnt/summaryofpropertyissuesbyprop',
      text: 'Summary of Property Issues by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/assetmngmnt/searchpropsassets',
      text: 'Search Properties',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/assetmngmnt/searchproptxesassets',
      text: 'Search Property Transactions',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/assetmngmnt/searchownersassets',
      text: 'Search Owners of Properties',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/assetmngmnt/searchrepmainthistbypropassets',
      text: 'Search Repairs & Maintenance Histories of Properties',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/assetmngmnt/searchtenantsbypropassets',
      text: 'Search Tenants by Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/assetmngmnt/searchacctrecordsbypropassets',
      text: 'Search Accounts Records by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/assetmngmnt/searchdocsbypropassets',
      text: 'Search Documents by Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/assetmngmnt/maintreq',
      text: 'Receive Maintenance Request',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/assetmngmnt/issuemaintrequest',
      text: 'Issue Maintenance Request',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/assetmngmnt/searchsuppliersassets',
      text: 'Search Suppliers',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/assetmngmnt/gathermaintenancequotes',
      text: 'Gather Quotes for Maintenance',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/assetmngmnt/currentmaintquotes',
      text: 'Current Maintenance Quotes',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/assetmngmnt/proposemaintsupplier',
      text: 'Propose Supplier for Maintenance',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/assetmngmnt/issuepurchorder',
      text: 'Issue Purchase Order',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/assetmngmnt/inspectwork',
      text: 'Inspect Maintenance Work',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/assetmngmnt/receivebillformaintworkassets',
      text: 'Receive Bill for Maintenance on Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '20',
      name: 'radio_list',
      value: '/menu/assetmngmnt/paybillformaintworkassets',
      text: 'Pay Bill for Maintenance on Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '21',
      name: 'radio_list',
      value: '/menu/assetmngmnt/complaintaboutmaintenancedone',
      text: 'Complaints About Maintenance Performed',
      disabled: false,
      checked: false,
      color: 'secondary'
    },{
      id: '22',
      name: 'radio_list',
      value: '/menu/assetmngmnt/registervacantorvoid',
      text: 'Register Vacant or Void Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '23',
      name: 'radio_list',
      value: '/menu/assetmngmnt/vacantsandvoids',
      text: 'Vacants and Voids',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '24',
      name: 'radio_list',
      value: '/menu/assetmngmnt/cleanupvacatedproperty',
      text: 'Cleanup Vacated Property - Charge Against Bond',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '25',
      name: 'radio_list',
      value: '/menu/assetmngmnt/supplierheadersassets',
      text: 'Supplier Headers',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '26',
      name: 'radio_list',
      value: '/menu/assetmngmnt/suppliertxassets',
      text: 'Supplier Transactions',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '27',
      name: 'radio_list',
      value: '/menu/assetmngmnt/keyregisterassets',
      text: 'Key Register',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '28',
      name: 'radio_list',
      value: '/menu/assetmngmnt/maintenancecomplaint',
      text: 'Maintenance Not Done Complaints',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '29',
      name: 'radio_list',
      value: '/menu/assetmngmnt/filingassets',
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
    if (this.selectedRadioItem.checked == true) { this.router.navigate(['this.selectedRadioItem.value']);
    };
  }
  radioBlur() {
    console.log("radioBlur");
  }
}