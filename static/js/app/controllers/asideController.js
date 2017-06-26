app.controller('asideCtrl', ($scope) => {
    
    $scope.menuExpand = true;
    $scope.footerLayout = 'row';
    $scope.btnWith;
    $scope.toggleMenu = () => {
        $scope.menuExpand = !$scope.menuExpand; 
        if ($scope.footerLayout == 'row') {
            $scope.footerLayout = 'column';
            $scope.btnWith = 'min-width:100%';
        } else {
            $scope.footerLayout = 'row'
            $scope.btnWith = 'min-width:1%';
        }
    }
    $scope.menuButtons = [
        {
            'name' : ' Home',
            'icon' : 'ion-ios-home',
            'action' : 'index'
        },
        {
             'name' : ' About me',
             'icon' : 'ion-ios-contact',
             'action' : 'about'
        },
        {
             'name' : ' Resume',
             'icon' : 'ion-ios-bookmarks',
             'action' : 'resume'
        },
        {
            'name' : ' Portfolio',
            'icon' : 'ion-ios-briefcase',
            'action' : 'portfolio'
        },
        {
             'name' : ' Contact',
             'icon' : 'ion-paper-airplane',
             'action' : 'contact'
        }
    ]
    
    $scope.footerButtons = [
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

    $scope.go = (i) => console.log('hola', i);
})