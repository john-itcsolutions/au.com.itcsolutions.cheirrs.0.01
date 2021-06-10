import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheetsleave',
  templateUrl: './timesheetsleave.page.html',
  styleUrls: ['./timesheetsleave.page.scss'],
})
export class TimesheetsleavePage implements OnInit {

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
      value: '/menu/timesheetsleave/myemploymentcontract',
      text: 'My Employment Contract',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/timesheetsleave/myjobdescription',
      text: 'My Job Description',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/timesheetsleave/mytimesheet',
      text: 'My Timesheet',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/timesheetsleave/myleavehistory',
      text: 'My Leave History',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/timesheetsleave/applyforleave',
      text: 'Apply for Leave',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/timesheetsleave/salpackfringebenefitstimesheets',
      text: 'Salary Pack Fringe Benefits',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/timesheetsleave/salescommtimesheet',
      text: 'Sales Commission',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/timesheetsleave/myperformance',
      text: 'My Performance',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/timesheetsleave/employeecomplaintbyemployee',
      text: 'File Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/timesheetsleave/tenderresignation',
      text: 'Tender Resignation',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/timesheetsleave/filingtsheets',
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
    let Value = this.selectedRadioItem.value;
  }
  radioBlur() {
    console.log("radioBlur");
  }
}
