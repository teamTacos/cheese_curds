
(function() {
    var app = angular.module('choHan', []);

    app.controller('GameTurnController', ['$scope', function ($scope) {
        bank.init();
        $scope.bank = bank.total;
        $scope.die1 = '0';
        $scope.die2 = '0';
        var rollResult = '';
        var bid_amount = 0;
        var choice = '';

        $scope.placeBet = function () {
            bid_amount = parseInt($('#bet').val());
            choice = $('input[type="radio"][name="bet-choice"]:checked').val();

        };

        $scope.rollDice = function () {
            $scope.doubles = false;
            $scope.die1 = rollDie();
            $scope.die2 = rollDie();
            $scope.rollTotal = $scope.die1 + $scope.die2;
            $scope.$broadcast('gameTurnEvent', $scope.rollTotal);
            gameResult($scope.rollTotal);
        };

        function gameResult(rollTotal) {
            results.highlightRollResult(rollTotal);
            if (results.rollResult == choice) {
                $scope.bank = bank.addToBank(bid_amount);
                results.showWinner();
            } else {
                $scope.bank = bank.subtractFromBank(bid_amount);
                results.showLoser();
            }
        }

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
        $('.bank').children().prop('disabled',false);
        $('.option').prop('disabled',false);
        $bet.removeClass('disabled');
    })
    $bet.click(function() {
        $('.bank').children().prop('disabled', true);
        $('.option').prop('disabled',true);
        $(this).addClass('disabled');
        $roll.prop('disabled',false);
        $roll.removeClass('disabled');
        $('#result').removeClass('winner');
        $('#result').removeClass('loser');
    });
});

$( document ).ready(results.init);
