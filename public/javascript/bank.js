var bank = {
    init: function() {
        bank.startingAmount = 1000;
        bank.total = bank.startingAmount;
    },
    addToBank: function(amount) {
        bank.total += amount;
        return bank.total;
    },
    subtractFromBank: function(amount) {
        bank.total -= amount
        return bank.total;
    }
};