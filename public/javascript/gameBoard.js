(function () {
    var app = angular.module('gameBoard', []);

    app.controller('GameBoardController', function ($http) {
        this.properties = places;
    });

    var places = [{
        id: 0,
        name: 'Uchagonia',
        price: 500,
        color: 'brown',
        group_id: 0
    }, {
        id: 1,
        name: 'Uchagonia II',
        price: 650,
        color: 'brown',
        group_id: 0
    }, {
        id: 2,
        name: 'Uchagonia III',
        price: 450,
        color: 'brown',
        group_id: 0
    }, {
        id: 3,
        name: 'Mah Town',
        price: 100,
        color: 'purple',
        group_id: 1
    }, {
        id: 1,
        name: 'Uptown',
        price: 150,
        color: 'purple',
        group_id: 0
    }]

})();