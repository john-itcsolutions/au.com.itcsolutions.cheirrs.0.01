import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.page.html',
  styleUrls: ['./reporting.page.scss'],
})
export class ReportingPage implements OnInit {

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
      value: '/menu/reporting/reportsinfiniflex',
      text: 'Multiflex Reporting',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/reporting/datasecurityanalysis',
      text: 'Third Party Data Security Report',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/reporting/profitlossreport',
      text: 'Profit and Loss Report',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/reporting/cashflowanalysisandreport',
      text: 'Cash Flow Analysis and Report',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/reporting/balancesheet',
      text: 'Balance Sheet',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/reporting/budgets',
      text: 'Budget Forecasts',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/reporting/trialbalancereporting',
      text: 'Trial Balance',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/reporting/tenantsledger',
      text: 'Tenants Ledger by Tenant or Address',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/reporting/arrearsbyaddressandtenant',
      text: 'Arrears and Non-Rent Debt by Address and Tenant',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/reporting/arrearsbyportfolio',
      text: 'Arrears and Non-Rent Debt by Portfolio',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/reporting/cyclicalrepairsbyproperty',
      text: 'Cyclical Repairs by Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/reporting/responsiverepairsbyproperty',
      text: 'Responsive Repairs by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/reporting/propertyinspbyhousingmanager',
      text: 'Property Inspections by Housing Manager',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/reporting/leavetakenandowingperemployee',
      text: 'Leave Taken & Owing per Employee',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/reporting/reportstrategicplan',
      text: 'Strategic Plan (Report)',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/reporting/reportbusinessplan',
      text: 'Business Plan (Report)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/reporting/reportoperationalplan',
      text: 'Operational Plan (Report)',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/reporting/riskmanagementplanreport',
      text: 'Risk Management Plan (Report)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/reporting/emergingrisksreport',
      text: 'Emerging Risks Report',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/reporting/propertiesbycategory',
      text: 'Properties by Project/Class/Program',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '20',
      name: 'radio_list',
      value: '/menu/reporting/safetyincidents',
      text: 'Safety Incidents',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '21',
      name: 'radio_list',
      value: '/menu/reporting/incomeexpensebybranch',
      text: 'Income & Expense by Branch',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '22',
      name: 'radio_list',
      value: '/menu/reporting/incomeexpensebypropprogram',
      text: 'Income & Expense by Property Program',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '23',
      name: 'radio_list',
      value: '/menu/reporting/incomeexpensebypropclass',
      text: 'Income & Expense by Property Class',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '24',
      name: 'radio_list',
      value: '/menu/reporting/reportingwhsauditing',
      text: 'Work Health & Safety Auditing Report',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '25',
      name: 'radio_list',
      value: '/menu/reporting/reportingacctspayableauditing',
      text: 'Accounts Payable Auditing Report',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '26',
      name: 'radio_list',
      value: '/menu/reporting/reportingacctsrecvableauditing',
      text: 'Accounts Receivable Auditing Report',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '27',
      name: 'radio_list',
      value: '/menu/reporting/vacantsvoidsreport',
      text: 'Vacants & Voids Report',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '28',
      name: 'radio_list',
      value: '/menu/reporting/reportceomultiflex',
      text: 'CEO Multiflex Report',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '29',
      name: 'radio_list',
      value: '/menu/reporting/reportcfomultiflex',
      text: 'CFO Multiflex Report',
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
