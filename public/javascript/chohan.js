
(function() {
    var app = angular.module('choHan', []);

    app.controller('GameTurnController', ['$scope', function ($scope) {
        bank.init();
        results.init();
        game.init();
        $scope.bank = bank.total;

        $scope.placeBet = function () {
            bid_amount = parseInt($('#bet').val());
            if(bank.validateBid(bid_amount)) {
                choice = $('input[type="radio"][name="bet-choice"]:checked').val();
                game.disableBet();
                game.enableRoll();
            } else {
                alert('Bid too high. You only have $' + bank.total);
            }
            $scope.isWinner = false;
            $scope.isLoser = false;
        };

        $scope.rollDice = function () {
            game.enableBet();
            game.disableRoll();
            $scope.doubles = false;
            $scope.die1 = game.rollDie();
            $scope.die2 = game.rollDie();
            $scope.rollTotal = $scope.die1 + $scope.die2;
            $scope.$broadcast('gameTurnEvent', $scope.rollTotal);
            gameResult($scope.rollTotal);
        };

        function gameResult(rollTotal) {
            results.highlightRollResult(rollTotal);
            if (results.rollResult == choice) {
                $scope.bank = bank.addToBank(bid_amount);
                $scope.isWinner = true;
            } else {
                $scope.bank = bank.subtractFromBank(bid_amount);
                $scope.isLoser = true;
            }
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

});
