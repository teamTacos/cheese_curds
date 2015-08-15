(function () {
    var app = angular.module('gameTurn', []);

    app.controller('GameTurnController', ['$scope', function ($scope) {
        $scope.die1 = '0';
        $scope.die2 = '0';

        $scope.rollDice = function () {
            $scope.doubles = false;
            $scope.die1 = rollDie();
            $scope.die2 = rollDie();
            $scope.rollTotal = $scope.die1 + $scope.die2
            if ($scope.die1 == $scope.die2) $scope.doubles = true;
            $scope.$broadcast('gameTurnEvent', $scope.rollTotal);
        };

        function rollDie() {
            var die = [1, 2, 3, 4, 5, 6];
            var randomIndex = Math.floor(Math.random() * die.length);
            return die.splice(randomIndex, 1)[0];
        };
    } ]);

    app.controller('PlayerMovementController', ['$scope', function ($scope) {

        var startTop = 52;
        var startLeft = 48;

        setStartLocation();
        $scope.$on('gameTurnEvent', function(event, spaces) {
            $(".token").animate({ left: (startLeft + (125 * spaces)) });
        });

        $scope.movePlayer = function (spaces) {
            $(".token").animate({ left: (startLeft + (125 * spaces)) });
        };

        $scope.moveBack = function () {
            $(".token").animate({ left: startLeft });
        };

        function setStartLocation() {

            $(".token").parent().css({ position: 'relative' });
            $(".token").css({ top: startTop, left: startLeft, position: 'relative' });
        };

    } ]);

})();
