
(function() {
    var app = angular.module('choHan', []);

    app.controller('GameTurnController', ['$scope', function ($scope) {
        $scope.die1 = '0';
        $scope.die2 = '0';

        $scope.rollDice = function () {
            $scope.doubles = false;
            $scope.die1 = rollDie();
            $scope.die2 = rollDie();
            $scope.rollTotal = $scope.die1 + $scope.die2;
            if ($scope.rollTotal % 2 == 0)
            {
                $("#han").addClass('selected');
                $("#cho").removeClass('selected');
            } else {
                $("#cho").addClass('selected');
                $("#han").removeClass('selected');
            }
            $scope.$broadcast('gameTurnEvent', $scope.rollTotal);
        };

        function rollDie() {
            var die = [1, 2, 3, 4, 5, 6];
            var randomIndex = Math.floor(Math.random() * die.length);
            return die.splice(randomIndex, 1)[0];
        }
    } ]);
})();