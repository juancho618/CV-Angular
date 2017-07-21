app.controller('asideCtrl', function($window) {
    let self = this;
    self.menuExpand = false;
    self.footerLayout = 'column'; // depends on the way that needs to be initialize.
    self.btnWith;
    self.toggleMenu = () => {
        self.menuExpand = !self.menuExpand; 
        if (self.footerLayout == 'row') {
            self.footerLayout = 'column';
            self.btnWith = 'min-width:100%';
        } else {
            self.footerLayout = 'row'
            self.btnWith = 'min-width:1%';
        }
    }
    self.menuButtons = [
        {
            'name' : ' Home',
            'icon' : 'ion-ios-home',
            'action' : '/'
        },
        {
             'name' : ' About me',
             'icon' : 'ion-ios-contact',
             'action' : '/about'
        },
        {
             'name' : ' Resume',
             'icon' : 'ion-ios-bookmarks',
             'action' : '/resume'
        },
        {
            'name' : ' Portfolio',
            'icon' : 'ion-ios-briefcase',
            'action' : '/portfolio'
        },
        {
             'name' : ' Contact',
             'icon' : 'ion-paper-airplane',
             'action' : '/contact'
        }
    ]
    
    self.footerButtons = [
    {
        'icon' : 'ion-social-facebook',
        'action' : 'fac'
    },
    {
        'icon' : 'ion-social-github',
        'action' : 'gu'
    },
    {
        'icon' : 'ion-social-linkedin',
        'action' : 'lin'
    }        
    ]

    self.go = (i) => $window.location.href = i.action;
})