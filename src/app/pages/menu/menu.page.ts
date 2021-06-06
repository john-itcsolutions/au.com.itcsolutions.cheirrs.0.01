import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
 
  pages = [
    {
      title: 'Home',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Contracts & Processes',
      url: '/menu/bpdi',
      icon: 'cog'
    },
    {
      title: 'Strategic Planning',
      url: '/menu/strategicplanning',
      icon: 'locate'
    },
    {
      title: 'Management of Risk',
      url: '/menu/riskmngmnt',
      icon: 'umbrella'
    },
    {
      title: 'Property',
      url: '/menu/property',
      icon: 'business'
    },
    {
      title: '(Re)Development',
      url: '/menu/rdevelop',
      icon: 'hammer'
    },
    {
      title: 'Sales incl Shared Equity',
      url: '/menu/sales',
      icon: 'gift'
    },
    {
      title: 'Customer Relations',
      url: '/menu/crm',
      icon: 'ribbon'
    },
    {
      title: 'Landlords & Investors',
      url: '/menu/llordsinvstrs',
      icon: 'thumbs-up'
    },
    {
      title: 'Shared Equity',
      url: '/menu/sharedequity',
      icon: 'hand'
    },
    {
      title: 'Leasing',
      url: '/menu/letting',
      icon: 'key'
    },
    {
      title: 'Tenancy Management',
      url: '/menu/tenancymngmnt',
      icon: 'tablet-portrait'
    },
    {
      title: 'Asset Management',
      url: '/menu/assetmngmnt',
      icon: 'clipboard'
    },
    {
      title: 'Workshop',
      url: '/menu/workshop',
      icon: 'construct'
    },
    {
      title: 'Human Resources',
      url: '/menu/humanresources',
      icon: 'contacts'
    },
    {
      title: 'Timesheets & Leave',
      url: '/menu/timesheetsleave',
      icon: 'logo-usd'
    },
    {
      title: 'Payroll',
      url: '/menu/payroll',
      icon: 'list-box'
    },
    {
      title: 'Administration',
      url: '/menu/administration',
      icon: 'filing'
    },
    {
      title: 'Finance',
      url: '/menu/finance',
      icon: 'wallet'
    },
    {
      title: 'Reporting',
      url: '/menu/reporting',
      icon: 'calendar'
    }                                                                 
  ];
 
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
 
  ngOnInit() {
 
  }
}