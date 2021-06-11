import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rdevelop',
  templateUrl: './rdevelop.page.html',
  styleUrls: ['./rdevelop.page.scss'],
})
export class RdevelopPage implements OnInit {

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
      value: '/menu/rdevelop/develproposals',
      text: 'Development Proposals',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/rdevelop/redevelproposals',
      text: 'Redevelopment Proposals',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/rdevelop/developapprovals',
      text: 'Board Development Approvals by Stages',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/rdevelop/redevelopapprovals',
      text: 'Redevelopment Approvals by Stages',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/rdevelop/rdevelsumissionstogovtitleholders',
      text: 'Redevelopment Submissions to Gov Title Holder',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/rdevelop/rdevelapprovalsfromgovtitleholders',
      text: 'Redevelopment Approvals from Gov Title Holder',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/rdevelop/rdvlpfundingsubmissions',
      text: 'Funding Submissions',
      disabled: false,
      checked: false,
      color: 'primary'
    },  {
      id: '7',
      name: 'radio_list',
      value: '/menu/rdevelop/projectlegalities',
      text: 'Project Legalities and Requirements',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/rdevelop/projectriskanalysis',
      text: 'Project Risk Analysis',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/rdevelop/projectfinancialanalysis',
      text: 'Project Financial Analysis',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/rdevelop/projectscheduling',
      text: 'Project Scheduling and Milestones',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/rdevelop/projectbudgeting',
      text: 'Project Budgeting and Costing',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/rdevelop/projectdesign',
      text: 'Project Design',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/workshop/rdevelopitems',
      text: 'Construction Items/Inventory (incl Tools)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/workshop/rdevelopjobs',
      text: 'Construction Jobs',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/workshop/rdeveloppurchreq',
      text: 'Construction Purchase Requests',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/workshop/rdeveloppurchorders',
      text: 'Construction Purchase Orders',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/workshop/rdevelopfirstaid',
      text: 'First Aid',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/workshop/rdevelopqualassurance',
      text: 'Quality Assurance',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/workshop/rdevelopteamboards',
      text: 'Construction Team Boards',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '20',
      name: 'radio_list',
      value: '/menu/workshop/rdevelopprodschedules',
      text: 'Construction Schedules',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '21',
      name: 'radio_list',
      value: '/menu/workshop/rdevelopproductionrequirements',
      text: 'Construction Requirements: Jobs and Items (Requ Templates + Customised Requ)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '22',
      name: 'radio_list',
      value: '/menu/rdevelop/potentialdevelprojects',
      text: 'Potential Development Projects',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '23',
      name: 'radio_list',
      value: '/menu/rdevelop/potentialredevelprojects',
      text: 'Potential Redevelopment Projects',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '24',
      name: 'radio_list',
      value: '/menu/rdevelop/historyofdevelopments',
      text: 'History of Developments',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '25',
      name: 'radio_list',
      value: '/menu/rdevelop/historyofredevelopments',
      text: 'History of Redevelopments',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '26',
      name: 'radio_list',
      value: '/menu/rdevelop/projectresources',
      text: 'Combined Current Project Resources',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '27',
      name: 'radio_list',
      value: '/menu/rdevelop/combinedprojects',
      text: 'Combined View of Current Projects',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '28',
      name: 'radio_list',
      value: '/menu/rdevelop/filingrdevel',
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