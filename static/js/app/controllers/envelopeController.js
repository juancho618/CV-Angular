app.controller('envelopeCtrl', function($window){
    let self = this;
    self.isOpen = false;
    self.dialog = false;

    self.start = () => {
        let env = angular.element( document.querySelector('#envelope'));
        env.addClass("animated bounceOutLeft");
        self.dialog = true;
    }
    

});