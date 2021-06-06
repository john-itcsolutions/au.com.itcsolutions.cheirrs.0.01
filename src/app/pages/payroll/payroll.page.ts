import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.page.html',
  styleUrls: ['./payroll.page.scss'],
})
export class PayrollPage implements OnInit {

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
      value: '/menu/payroll/regemployee',
      text: 'Register Employee',
      disabled: false,
      checked: false,
      color: 'primary'
    },{
      id: '1',
      name: 'radio_list',
      value: '/menu/payroll/regsalesagent',
      text: 'Register Sales Agent',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/payroll/searchemployees',
      text: 'Search Employees',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/payroll/searchemplandagentstxespr',
      text: 'Search Employee & Agent Transactions',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/payroll/searchsalesagents',
      text: 'Search Sales Agents',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/payroll/wages',
      text: 'Timesheets, Wages & Leave',
      disabled: false,
      checked: false,
      color: 'secondary'
    },{
      id: '6',
      name: 'radio_list',
      value: '/menu/payroll/salarypacksfringebenefits',
      text: 'Salary Packs & Fringe Benefits',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/payroll/salescommission',
      text: 'Sales Commission',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/payroll/searchdocsbyemplpr',
      text: 'Search Documents by Employee',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/payroll/searchdocsbyagentpr',
      text: 'Search Documents by Agent',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/payroll/stspayroll',
      text: 'Simplified Tax System',
      disabled: false,
      checked: false,
      color: 'primary'
    },{
      id: '11',
      name: 'radio_list',
      value: '/menu/payroll/superpayroll',
      text: 'Superstream',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/payroll/annualleave',
      text: 'Annual Leave',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/payroll/searchemploymentoragencycontracts',
      text: 'Search Employment or Agency Contracts',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/payroll/longserviceleave',
      text: 'Long Service Leave',
      disabled: false,
      checked: false,
      color: 'primary'
    }, { 
      id: '15',
      name: 'radio_list',
      value: '/menu/payroll/otherleave',
      text: 'Other Leave',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/payroll/terminateagentoremployee',
      text: 'Terminate Employee or Agent',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/payroll/filingpay',
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