// Stage 2/4: Convert a currency

class currencyConverterUSD {
    constructor(quantity) {
        this.USD = 1 * quantity;
        this.JPY = 113.5 * quantity;
        this.EUR = 0.89 * quantity;
        this.RUB = 74.36 * quantity;
        this.GBP = 0.75 * quantity;
    }
}

function currencyConverter (convertedCurrency, quantity) {
    console.log(`Welcome to Currency Converter!`);
    let converter = new currencyConverterUSD(quantity);
    for (const [key, value] of Object.entries(converter)) {
        console.log(`${quantity} ${convertedCurrency} equals ${value} ${key}`);
    }
}
