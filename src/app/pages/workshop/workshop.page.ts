import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.page.html',
  styleUrls: ['./workshop.page.scss'],
})
export class WorkshopPage implements OnInit {

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
      value: '/menu/workshop/workshopjobs',
      text: 'Current Jobs',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/workshop/workshopitems',
      text: 'Inventory Items (incl Tools)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/workshop/workshopassembliestoplevel',
      text: 'Top Level Assemblies - eg entire housing unit',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/workshop/workshopassembliessecondlevel',
      text: 'Second Level Assemblies',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/workshop/workshopassembliethirdlevel',
      text: 'Third Level Assemblies',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/workshop/workshopassembliefourthlevel',
      text: 'Fourth Level Assemblies',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/workshop/workshopassembliefifthlevel',
      text: 'Fifth Level Assemblies',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/workshop/workshopassembliesixthlevel',
      text: 'Sixth Level Assemblies',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/workshop/workshopengineeringanddesign',
      text: 'Engineering and Design',
      disabled: false,
      checked: false,
      color: 'primary'
    },  { 
      id: '7',
      name: 'radio_list',
      value: '/menu/workshop/workshopordersrec',
      text: 'Orders Received',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/workshop/workshoppurchreq',
      text: 'Purchase Requests',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/workshop/workshoppurchorders',
      text: 'Purchase Orders',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/workshop/workshopfirstaid',
      text: 'First Aid',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/workshop/workshopqualassurance',
      text: 'Quality Assurance',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/workshop/workshopteamboards',
      text: 'Teamboards',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/workshop/workshopprodschedules',
      text: 'Production Schedules',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/workshop/workshopproductionrequirements',
      text: 'Production Requirements: Jobs and Items (Requ Templates + Customised Requ)',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/workshop/workshoptrackshipmentsin',
      text: 'Track Inbound Shipments',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/workshop/workshoptrackshipmentsout',
      text: 'Track Outbound Shipments',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '17',
      name: 'radio_list',
      value: '/menu/workshop/workshopprocesses',
      text: 'Safe Workshop Processes',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '18',
      name: 'radio_list',
      value: '/menu/workshop/workshopinventory',
      text: 'Inventory Control',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '19',
      name: 'radio_list',
      value: '/menu/workshop/factorymaintenance',
      text: 'Factory Maintenance',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '20',
      name: 'radio_list',
      value: '/menu/workshop/productcomplaintsrecd',
      text: 'Product Complaints Received',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '21',
      name: 'radio_list',
      value: '/menu/workshop/productcomplaintstosupplier',
      text: 'Product Complaints to Supplier',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '22',
      name: 'radio_list',
      value: '/menu/workshop/filingwkshp',
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