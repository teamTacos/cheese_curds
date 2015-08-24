var game = {
    init: function() {
        game.bettingOptions = {
            han: $('input[type="radio"][value="han"]'),
            cho: $('input[type="radio"][value="cho"]')
        };
        game.bettingControls = {
            bidButton: $('#place-bet'),
            bidAmount: $('#bet'),
            han: game.bettingOptions.han,
            cho: game.bettingOptions.cho
        };
        game.rollControls = {
            rollButton: $('#roll')
        };
        game.enableBet();
        game.disable(game.rollControls.rollButton)
    },
    rollDie: function() {
        var die = [1, 2, 3, 4, 5, 6];
        var randomIndex = Math.floor(Math.random() * die.length);
        return die.splice(randomIndex, 1)[0];
    },
    enableRoll: function() {
        game.enable(game.rollControls.rollButton);
    },
    disableRoll: function() {
        game.disable(game.rollControls.rollButton);
    },
    enableBet: function() {
        Object.keys(game.bettingControls).forEach(function (key) {
            game.enable(game.bettingControls[key]);
        });
    },
    disableBet: function() {
        Object.keys(game.bettingControls).forEach(function (key) {
            game.disable(game.bettingControls[key]);
        });
    },
    enable: function(element) {
        $(element).removeClass('disabled');
        $(element).prop('disabled', false);
    },
    disable: function(element) {
        $(element).addClass('disabled');
        $(element).prop('disabled', true);
    }
};
