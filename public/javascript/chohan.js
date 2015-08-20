
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
                $("#cho").addClass('selected');
                $("#han").removeClass('selected');
            } else {
                $("#han").addClass('selected');
                $("#cho").removeClass('selected');
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

$(document).ready(function(){
    var $han = $('input[type="radio"][value="han"]');
    var $cho = $('input[type="radio"][value="cho"]');
    $han.click(function(){
        $han.parent().addClass('selected');
        $cho.parent().removeClass('selected');
    });
    $cho.click(function(){
        $cho.parent().addClass('selected');
        $han.parent().removeClass('selected');
    });
    var $roll = $('#roll');
    var $bet = $('#place-bet');
    $roll.click(function() {
        $(this).prop('disabled',true);
        $(this).addClass('disabled');
        $bet.prop('disabled',false);
        $bet.removeClass('disabled');
    })
    $bet.click(function() {
        $(this).prop('disabled',true);
        $(this).addClass('disabled');
        $roll.prop('disabled',false);
        $roll.removeClass('disabled');
    })
});