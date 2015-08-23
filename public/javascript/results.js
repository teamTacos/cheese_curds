var results = {
    init: function() {
        results.possibleResults = {
            han: $("#han"),
            cho: $("#cho")
        };
        results.image = $('#result');
        results.rollResult = nil;
    },
    showWinner: function() {
        results.image.addClass('winner');
        results.image.removeClass('loser')
    },
    showLoser: function() {
        results.image.addClass('loser');
        results.image.removeClass('winner');
    },
    highlightRollResult: function(rollTotal) {
        if (rollTotal % 2 == 0)
        {
            results.rollResult = 'cho';
            results.selected(results.possibleResults.cho);
            results.unselected(results.possibleResults.han);
        } else {
            results.rollResult = 'han';
            results.selected(results.possibleResults.han);
            results.unselected(results.possibleResults.cho);
        }
    },
    selected: function(element) {
        $(element).addClass('selected');
    },
    unselected: function(element) {
        $(element).removeClass('selected');
    }

};