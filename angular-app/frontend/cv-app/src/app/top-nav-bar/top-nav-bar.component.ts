import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuButtons = [
    {
        'name' : ' Home',
        'icon' : 'home',
        'action' : '/'
    },
    {
         'name' : ' About me',
         'icon' : 'portrait',
         'action' : '/about'
    },
    {
         'name' : ' Resume',
         'icon' : 'file-invoice',
         'action' : '/resume'
    },
    {
        'name' : ' Portfolio',
        'icon' : 'book',
        'action' : '/portfolio'
    },
    {
         'name' : ' Contact',
         'icon' : 'mail-bulk',
         'action' : '/contact'
    }
]


}
