import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-humanresources',
  templateUrl: './humanresources.page.html',
  styleUrls: ['./humanresources.page.scss'],
})
export class HumanresourcesPage implements OnInit {

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
      value: '/menu/humanresources/receiveemplapplication',
      text: 'Application for Employment',
      disabled: false,
      checked: false,
      color: 'primary'
    },{
      id: '1',
      name: 'radio_list',
      value: '/menu/humanresources/taksalesagentapplic',
      text: 'Application by Registered Sales Agent',
      disabled: false,
      checked: false,
      color: 'secondary'
    },{
      id: '2',
      name: 'radio_list',
      value: '/menu/humanresources/shortlistapplicants',
      text: 'Shortlist Employment Applicants ',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/humanresources/criminalrecordchecking',
      text: 'Criminal Record Checking',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/humanresources/workingwithchildrenchecking',
      text: 'Working with Children Checking',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/humanresources/interviewapplicant',
      text: 'Interview Applicant',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/humanresources/selectsuccessfulapplicant',
      text: 'Select Successful Applicant',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/humanresources/makeofferofemployment',
      text: 'Make Offer of Employment',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/humanresources/regemployee',
      text: 'Register Employee',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/humanresources/regsalesagent',
      text: 'Register Sales Agent',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/humanresources/searchemployeeshr',
      text: 'Search Employees',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/humanresources/searchemplandagentstxes',
      text: 'Search Employee & Agent Transactions',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/humanresources/searchsalesagentshr',
      text: 'Search Sales Agents',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/humanresources/rolesandemployees',
      text: 'Roles and Employees',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/humanresources/teams',
      text: 'Work Teams',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/humanresources/groups',
      text: 'Message Groups',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/humanresources/salarypacksfringebenefits',
      text: 'Salary Packages & Fringe Benefits',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/humanresources/salescommission',
      text: 'Sales Commission',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/humanresources/payroll',
      text: 'Payroll',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/humanresources/employmentdutydescriptions',
      text: 'Employment Contracts',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '20',
      name: 'radio_list',
      value: '/menu/humanresources/jobdescriptionshr',
      text: 'Job Descriptions',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '21',
      name: 'radio_list',
      value: '/menu/humanresources/searchdocsbyemply',
      text: 'Search Documents by Employee',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '22',
      name: 'radio_list',
      value: '/menu/humanresources/searchdocsbysalesagent',
      text: 'Search Documents by Sales Agent',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '23',
      name: 'radio_list',
      value: '/menu/humanresources/whstraining',
      text: 'WHS Training',
      disabled: false,
      checked: false,
      color: 'secondary'
    },{
      id: '24',
      name: 'radio_list',
      value: '/menu/humanresources/whsauditing',
      text: 'WHS Auditing',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '25',
      name: 'radio_list',
      value: '/menu/humanresources/stafftraining',
      text: 'Staff Training',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '26',
      name: 'radio_list',
      value: '/menu/humanresources/boardtraining',
      text: 'Board Training',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '27',
      name: 'radio_list',
      value: '/menu/humanresources/employeemediation',
      text: 'Employee Mediation',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '28',
      name: 'radio_list',
      value: '/menu/humanresources/performancemngmnt',
      text: 'Performance Management',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '29',
      name: 'radio_list',
      value: '/menu/humanresources/terminateagentoremployee',
      text: 'Terminate Agent or Employee',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '30',
      name: 'radio_list',
      value: '/menu/humanresources/employmentapplicantcomplaint',
      text: 'Employment Applicant Complaint',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '31',
      name: 'radio_list',
      value: '/menu/humanresources/employeecomplaint',
      text: 'Employee Complaint',
      disabled: false,
      checked: false,
      color: 'secondary'  
    }, {
      id: '32',
      name: 'radio_list',
      value: '/menu/humanresources/workshopsafetyaudits',
      text: 'Workshop Safety Audits',
      disabled: false,
      checked: false,
      color: 'primary'
    },{
      id: '33',
      name: 'radio_list',
      value: '/menu/humanresources/workshoptraining',
      text: 'Workshop Training',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '34',
      name: 'radio_list',
      value: '/menu/humanresources/workshopsafetytraining',
      text: 'Workshop Safety Training',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '35',
      name: 'radio_list',
      value: '/menu/humanresources/workshopinduction',
      text: 'Workshop Induction',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '36',
      name: 'radio_list',
      value: '/menu/humanresources/workshopqualificationsregister',
      text: 'Workshop Licences & Qualifications',
      disabled: false,
      checked: false,
      color: 'primary'  
    }, {
      id: '37',
      name: 'radio_list',
      value: '/menu/humanresources/firstaidhr',
      text: 'First Aid',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '38',
      name: 'radio_list',
      value: '/menu/humanresources/filinghr',
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