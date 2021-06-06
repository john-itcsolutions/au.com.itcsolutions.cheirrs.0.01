import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bpdi',
  templateUrl: './bpdi.page.html',
  styleUrls: ['./bpdi.page.scss'],
})
export class BpdiPage implements OnInit {
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
      value: '/menu/bpdi/createcontracttype',
      text: 'Create Contract Type',
      disabled: false,
      checked: true,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/bpdi/createbusinessprocesstype',
      text: 'Create Business Process Type',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/bpdi/createcontract',
      text: 'Create Contract (you may also create a type from this contract, here)',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/bpdi/rcommencecontract',
      text: '(Re-)Commence Contract (Instantiate Contract)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/bpdi/rcommencebusprocess',
      text: '(Re-)Commence Business Process (Instantiate Process)',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/bpdi/listcontracttypes',
      text: 'List Contract Types',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/bpdi/listcurrentandpendingcontracts',
      text: 'List Current & Pending Contracts',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/bpdi/listbusprocesstypes',
      text: 'List Business Process Types',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/bpdi/listcurrentbusprocesses',
      text: 'List Current Business Processes',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/bpdi/trackaprocess',
      text: 'Track Business Processes',
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