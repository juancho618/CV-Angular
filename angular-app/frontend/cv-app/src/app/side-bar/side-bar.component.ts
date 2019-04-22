import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuButtons = [//TODO create as a service
    {
        'name' : ' Home',
        'icon' : 'home',
        'action' : '/'
    },
    {
         'name' : ' About me',
         'icon' : 'portrait',
         'action' : '/aboutMe'
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
footerButtons = [
  {
      'icon' : 'instagram',
      'action' : 'fac'
  },
  {
      'icon' : 'github',
      'action' : 'gu'
  },
  {
      'icon' : 'linkedin',
      'action' : 'lin'
  }        
  ]
}
