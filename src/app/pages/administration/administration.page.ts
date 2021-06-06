import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {
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
      value: '/menu/administration/notifypropertyinspection',
      text: 'Arrange/Notify Property Inspection',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/administration/issuerentreceiptsadmin',
      text: 'Issue Rent Receipts',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/administration/correspondence',
      text: 'Correspondence',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/administration/employeeorsalesagentcontact',
      text: 'Employee or Sales Agent Contact',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/administration/employeeheaders',
      text: 'Employee Headers',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/administration/employeetransax',
      text: 'Employee Transactions',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/administration/ownercontact',
      text: 'Owner Contact',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/administration/ownerheader',
      text: 'Owner Header',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/administration/ownertxes',
      text: 'Owner Transactions',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/administration/partnercontact',
      text: 'Partner Contact',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/administration/partnerheaders',
      text: 'Partner Headers',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/administration/partnertxes',
      text: 'Partner Transactions',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/administration/suppliercontact',
      text: 'Supplier Contact',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/administration/supplierheaders',
      text: 'Supplier Headers',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/administration/suppliertxes',
      text: 'Supplier Transactions',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/administration/maintreq',
      text: 'Maintenance Request',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/administration/salescontact',
      text: 'Sales Contact',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/administration/buyercontact',
      text: 'Buyer Contact',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/administration/propertyheaders',
      text: 'Property Headers',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/administration/propertytx',
      text: 'Property Transactions',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '20',
      name: 'radio_list',
      value: '/menu/administration/customerheaders',
      text: 'Customer Headers',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '21',
      name: 'radio_list',
      value: '/menu/administration/custtransax',
      text: 'Customer Transactions',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '22',
      name: 'radio_list',
      value: '/menu/administration/employapplicantcontact',
      text: 'Employment Applicant Contact',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '23',
      name: 'radio_list',
      value: '/menu/administration/tenantcontact',
      text: 'Tenant Contact',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '24',
      name: 'radio_list',
      value: '/menu/administration/leaseapplicantcontact',
      text: 'Lease Applicant Contact',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '25',
      name: 'radio_list',
      value: '/menu/administration/auditorcontact',
      text: 'Auditor Contact',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '26',
      name: 'radio_list',
      value: '/menu/administration/communitycontact',
      text: 'Community Contact',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '27',
      name: 'radio_list',
      value: '/menu/administration/communityheaders',
      text: 'Community Headers',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '28',
      name: 'radio_list',
      value: '/menu/administration/communitytxes',
      text: 'Community Transactions',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '29',
      name: 'radio_list',
      value: '/menu/administration/mediacontact',
      text: 'Media Contact',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '30',
      name: 'radio_list',
      value: '/menu/administration/mediaheaders',
      text: 'Media Headers',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '31',
      name: 'radio_list',
      value: '/menu/administration/mediatxes',
      text: 'Media Transactions',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '32',
      name: 'radio_list',
      value: '/menu/administration/govcontact',
      text: 'Government Contact',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '33',
      name: 'radio_list',
      value: '/menu/administration/govheaders',
      text: 'Government Headers',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '34',
      name: 'radio_list',
      value: '/menu/administration/govtxes',
      text: 'Government Transactions',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '35',
      name: 'radio_list',
      value: '/menu/administration/customercomplaint',
      text: 'Customer Complaint',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '36',
      name: 'radio_list',
      value: '/menu/administration/llordinvestorcomplaint',
      text: 'Landlord/Investor Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '37',
      name: 'radio_list',
      value: '/menu/administration/leaseapplicantcomplaint',
      text: 'Lease Applicant Complaint',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '38',
      name: 'radio_list',
      value: '/menu/administration/employmentapplicantcomplaint',
      text: 'Employment Applicant Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '39',
      name: 'radio_list',
      value: '/menu/administration/tenantcomplaint',
      text: 'Tenant Complaint',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '40',
      name: 'radio_list',
      value: '/menu/administration/suppliercomplaint',
      text: 'Supplier Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '41',
      name: 'radio_list',
      value: '/menu/administration/supportpartnercomplaint',
      text: 'Support Partner Complaint',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '42',
      name: 'radio_list',
      value: '/menu/administration/governmentcomplaint',
      text: 'Government Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '43',
      name: 'radio_list',
      value: '/menu/administration/communitycomplaint',
      text: 'Community Complaint',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '44',
      name: 'radio_list',
      value: '/menu/administration/mediacomplaint',
      text: 'Media Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '45',
      name: 'radio_list',
      value: '/menu/administration/employeecomplaint',
      text: 'Employee Complaint',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '46',
      name: 'radio_list',
      value: '/menu/administration/maintenancecomplaint',
      text: 'Maintenance Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '47',
      name: 'radio_list',
      value: '/menu/administration/firstaidadmin',
      text: 'First Aid',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '48',
      name: 'radio_list',
      value: '/menu/administration/filingadmin',
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
    if (this.selectedRadioItem.checked == true) { this.router.navigate(['this.selectedRadioItem.value']);
    };
  }
  radioBlur() {
    console.log("radioBlur");
  }
}