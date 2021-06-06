import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {
  router: any;

  constructor(public any: Router){}

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
      value: '/menu/finance/financialbudgets',
      text: 'Financial Budgets',
      disabled: false,
      checked: false,
      color: 'primary'
    },{
      id: '1',
      name: 'radio_list',
      value: '/menu/finance/trustaccounts',
      text: 'Trust Accounts',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/finance/accountsreceivable',
      text: 'Accounts Receivable',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/finance/accountspayable',
      text: 'Accounts Payable',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/finance/newacct',
      text: 'New Account',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/finance/payroll',
      text: 'Payroll',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/finance/salarypacksfringebenefits',
      text: 'Salary Packaging & FBT',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/finance/superstream',
      text: 'SuperStream',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/finance/simplifiedtaxsystem',
      text: 'Simplified Tax System',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/finance/financialtxjournal',
      text: 'Financial Transaction Journal',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/finance/masterledger',
      text: 'Master Ledger',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/finance/tenantsledger',
      text: 'Tenants Ledger',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/finance/payrollliabilities',
      text: 'Payroll Liabilities',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/finance/taxationliabilities',
      text: 'Taxation Liabilities',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/finance/loans',
      text: 'Loans',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/finance/allliabilities',
      text: 'All Liabilities',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/finance/allassets',
      text: 'All Assets',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/finance/allcustomers',
      text: 'All Customers',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/finance/allsuppliers',
      text: 'All Suppliers',
      disabled: false,
      checked: false,
      color: 'primary'
    },{
      id: '19',
      name: 'radio_list',
      value: '/menu/finance/financeworkshop',
      text: 'Overdue Workshop Orders (Out)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '20',
      name: 'radio_list',
      value: '/menu/finance/purchaserequest',
      text: 'Purchase Requests',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '21',
      name: 'radio_list',
      value: '/menu/finance/purchaseorder',
      text: 'Purchase Orders',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '22',
      name: 'radio_list',
      value: '/menu/finance/pendingorders',
      text: 'All Pending Orders (Out)',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '23',
      name: 'radio_list',
      value: '/menu/finance/overdueorders',
      text: 'All Overdue Orders (Out)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '24',
      name: 'radio_list',
      value: '/menu/finance/invoicesreceived',
      text: 'All Invoices Received',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '25',
      name: 'radio_list',
      value: '/menu/finance/overdueinvoicesrecd',
      text: 'All Overdue Invoices Received',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '26',
      name: 'radio_list',
      value: '/menu/finance/chargesinvoicesout',
      text: 'All Charges/Invoices Out',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '27',
      name: 'radio_list',
      value: '/menu/finance/overduechargesinvoicessent',
      text: 'All Overdue Charges/Invoices (Out)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '28',
      name: 'radio_list',
      value: '/menu/finance/returnsout',
      text: 'Returns Out',
      disabled: false,
      checked: false,
      color: 'primary'
    },{
      id: '29',
      name: 'radio_list',
      value: '/menu/finance/returnsin',
      text: 'Returns In',
      disabled: false,
      checked: false,
      color: 'secondary'
    },  {
      id: '30',
      name: 'radio_list',
      value: '/menu/finance/trialbal',
      text: 'Trial Balance',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '31',
      name: 'radio_list',
      value: '/menu/finance/infiniflexreports',
      text: 'Multiflex Reports',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '32',
      name: 'radio_list',
      value: '/menu/finance/internalfinancialaudits',
      text: 'Internal Financial Audits',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '33',
      name: 'radio_list',
      value: '/menu/finance/endofyearactivities',
      text: 'End of Financial Year Activities',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '34',
      name: 'radio_list',
      value: '/menu/finance/externalfinancialaudits',
      text: 'External Financial Audits',
      disabled: false,
      checked: false,
      color: 'primary'
    },{
      id: '35',
      name: 'radio_list',
      value: '/menu/finance/filingfinance',
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