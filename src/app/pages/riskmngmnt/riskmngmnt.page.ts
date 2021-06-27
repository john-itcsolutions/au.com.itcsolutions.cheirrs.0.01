import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riskmngmnt',
  templateUrl: './riskmngmnt.page.html',
  styleUrls: ['./riskmngmnt.page.scss'],
})
export class RiskmngmntPage implements OnInit {

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
      value: '/menu/riskmngmnt/riskelements',
      text: 'Summary of Risk Elements - External',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/riskmngmnt/riskelementsinternal',
      text: 'Summary of Risk Elements - Internal',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/riskmngmnt/stratthreatsrskmngmnt',
      text: 'Strategic Threats',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/riskmngmnt/stratweaknessesrskmngmnt',
      text: 'Strategic Weaknesses',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/riskmngmnt/sovereignandinvestorrisk',
      text: 'Sovereign and Investor Risk',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/riskmngmnt/financialrisk',
      text: 'Financial Risk',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/riskmngmnt/developmentrisk',
      text: 'Development Risk',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/riskmngmnt/assetmngmntrisk',
      text: 'Asset Management Risk',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/riskmngmnt/tenancymngmntrisk',
      text: 'Tenancy Management Risk',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/riskmngmnt/workshoprisk',
      text: 'Workshop/Factory Risk',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/riskmngmnt/whsrisk',
      text: 'WHS Risk',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/riskmngmnt/datasecurityaudit',
      text: 'External Data Security Audit & Information Risk',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/riskmngmnt/employeerelationsrisk',
      text: 'Employee Relations Risk and Staff Culture',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/riskmngmnt/rskmngmntcommntyrptationrisk',
      text: 'Community Reputation Risk',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/riskmngmnt/otherrisk',
      text: 'Other Risks',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/riskmngmnt/emergingrisks',
      text: 'Emerging Risks',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/riskmngmnt/riskanalysis',
      text: 'Risk Analysis and Mitigation',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/riskmngmnt/risknotifications',
      text: 'Risk Notifications',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/riskmngmnt/risktolerances',
      text: 'Risk Tolerances According to Board',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/riskmngmnt/riskmngmntplan',
      text: 'Risk Management Plan - Interactive',
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
