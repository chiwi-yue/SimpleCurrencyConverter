// Stage 2/4: Convert a currency
const input = require('sync-input');

const convertCurrencyList = new Array('JPY', 'EUR', 'RUB', 'USD', 'GBP');

class currencyConverterUSD {
    constructor(quantity = 1) {
        this.USD = 1 * quantity;
        this.JPY = 113.5 * quantity;
        this.EUR = 0.89 * quantity;
        this.RUB = 74.36 * quantity;
        this.GBP = 0.75 * quantity;
    }
}

function currencyConverter() {
    console.log(`Welcome to Currency Converter!`);
    let initialiser = new currencyConverterUSD();
    for (const [key, value] of Object.entries(initialiser)) {
        console.log(`1 USD equals ${value} ${key}`);
    }
    console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
    let currencyConvertFrom = input("Type the currency you wish to convert: ").toUpperCase();
    let currencyConvertTo = input("To: ").toUpperCase();
    if (!convertCurrencyList.includes(currencyConvertTo)) {
        console.log("Unknown currency");
        return;
    }
    let amount = input("Amount: ");
    if (amount < 1) {
        console.log("The amount cannot be less than 1");
        return;
    } else if (isNaN(amount)) {
        console.log("The amount has to be a number");
        return;
    }
    let result = new currencyConverterUSD(amount);
    console.log(`Result: ${amount} ${currencyConvertFrom} equals ${result[currencyConvertTo].toFixed(4)} ${currencyConvertTo}`);
}


currencyConverter();
