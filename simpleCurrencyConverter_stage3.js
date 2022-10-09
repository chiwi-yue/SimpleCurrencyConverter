//Stage 3/4: Convert all currencies
const input = require('sync-input');

const convertCurrencyList = new Array('JPY', 'EUR', 'RUB', 'USD', 'GBP');

const convertRate = {
    "USD": 1,
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "GBP": 0.75,
};

function currencyConverter() {
    console.log(`Welcome to Currency Converter!`);

    for (const [key, value] of Object.entries(convertRate)) {
        console.log(`1 USD equals ${value} ${key}`);
    }

    let currencyConvertFrom = input("What do you want to convert?\nFrom: ").toUpperCase();
        if (!convertCurrencyList.includes(currencyConvertFrom)) {
            console.log("Unknown currency");
            return;
        }

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
    
    let result = helperGetConverteredResult(currencyConvertFrom, currencyConvertTo, amount);

    console.log(`Result: ${amount} ${currencyConvertFrom} equals ${result.toFixed(4)} ${currencyConvertTo}`);
}

function helperGetConverteredResult(currencyConvertFrom, currencyConvertTo, amount) {
    let convertedToUSD = amount / convertRate[currencyConvertFrom];
    let coverteredResult = convertedToUSD * convertRate[currencyConvertTo];
    return coverteredResult;
}

currencyConverter();
