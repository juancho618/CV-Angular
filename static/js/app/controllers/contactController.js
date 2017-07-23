app.controller('contactCtrl', function()  {
    let self = this;
    self.footerElements = [
    {
        'icon' : 'ion-email',
        'text' : 'jjsoriano@gmail.com'
    },
    {
        'icon' : 'ion-iphone',
        'text' : '+32 0483 47 23 27'
    },
    {
        'icon' : 'ion-location',
        'text' : 'Brussels, Belgium'
    }];
    self.form={};
    self.submitForm = function (isValid) {
        if (isValid) {
            $http({
                method: 'post',
                url: '/contact',
                data: self.form,
                headers: {'Content-Type': 'application/json'}
            }).then(function success(response) {
                swal("Thanks!", "I will reply you ASAP!", "success");
            }, function error(response) {
                swal("Invalid Data!", "Please fill in the right information!", "error");
            });
         } else {
            swal("Invalid Data!", "Please fill in the right information!", "error");
        }
    }


});