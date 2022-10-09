//Stage 4/4: Loop it!
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

function currencyConverterMain() {
    console.log(`Welcome to Currency Converter!`);

    for (const [key, value] of Object.entries(convertRate)) {
        console.log(`1 USD equals ${value} ${key}`);
    }

    let choice = input("What do you want to do?\n1-Convert currencies 2-Exit program\n");

    while (choice != 2) {
        switch(choice) {
            case "1":
                currencyConverter();
                choice = input("What do you want to do?\n1-Convert currencies 2-Exit program\n");
                break;
            default:
                console.log("Unknown input");
                choice = input("What do you want to do?\n1-Convert currencies 2-Exit program\n");
        }
    }
    console.log("Have a nice day!");
}

currencyConverterMain();
