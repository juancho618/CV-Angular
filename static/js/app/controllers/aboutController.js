app.controller('aboutCtrl', function() {
    let self = this;
    self.blockElements = [
        {
            'icon' : 'ion-cube',
            'text' : 'Embedded Systems'
        },
        {
            'icon' : 'ion-ios-cloud-outline',
            'text' : 'Data Analysis and automation'
        },
        {
            'icon' : 'ion-iphone',
            'text' : 'Mobile Apps development'
        },
        {
            'icon' : 'ion-coffee',
            'text' : 'Coffee Lover'
        },
        
    ]
    self.randomFact =  () => {
        const facts =[ "My favorite color is green (as you can notice in my web site 😝)",
            "I named my Dog Pythagoras",
            "I am 1,93 meters tall",
            "My favorite cocktail is Mojito",
            "I used to play Underwater Rugby",
            "The first programming language that I learnt is C++",
            "I found once a golden ring in the ocean",
            "My favorite animal is the spider",
            "I don't like pineapple in my pizza",
            "I enjoy sour candies",
            "My favorite coffee method is the Chemex",
            "O.o"];
        const picked = facts[Math.floor(Math.random()*facts.length)];
        self.fact = picked;
    }
    self.randomFact();
})