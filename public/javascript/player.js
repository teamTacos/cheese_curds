(function () {
    var app = angular.module('playerInfo', []);

    app.controller('PlayerController', function () {
        this.players = people;
    });

    var people = [{
        index: 1,
        name: 'Bob'
    },{
        index: 2,
        name: 'Jill'
    }]

})();