import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategicplanning',
  templateUrl: './strategicplanning.page.html',
  styleUrls: ['./strategicplanning.page.scss'],
})
export class StrategicplanningPage implements OnInit {

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
      value: '/menu/strategicplanning/strategicvision',
      text: 'Our Vision',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/strategicplanning/strategicmission',
      text: 'Our Mission',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/strategicplanning/strategicswotanalysis',
      text: 'Strategic S.W.O.T. Analysis (Our Operating Environment)',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/strategicplanning/strategicstrengths',
      text: 'Strategic Strengths - Detail',
      disabled: false,
      checked: false,
      color: 'secondary'
    },{
      id: '4',
      name: 'radio_list',
      value: '/menu/strategicplanning/strategicweaknesses',
      text: 'Strategic Weaknesses - Detail',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/strategicplanning/strategicopprtunities',
      text: 'Strategic Opportunities - Detail',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/strategicplanning/strategicthreats',
      text: 'Strategic Threats - Detail',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/strategicplanning/strategicplan',
      text: 'Strategic Plan - Interactive',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/strategicplanning/stratbusinessplanning',
      text: 'Strategic Business Planning - Interactive',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/strategicplanning/stratoperationalplanning',
      text: 'Strategic Operational Planning - Interactive',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/strategicplanning/strategicconstitution',
      text: 'Our Constitution',
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
