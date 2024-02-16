import currencyapi, { CurrencyAPI } from "@everapi/currencyapi-js";

type CurrencyType = 'fiat' | 'metal' | 'crypto'

interface CurrencyRate {
  code: string;
  value: number;
}

class CurrencyAPI  {
  client: CurrencyAPI;

  constructor() {
    this.client = new currencyapi(import.meta.env.VITE_CURRENCY_API_KEY);
  }

  async getAvailableCurrencies( type: CurrencyType = 'fiat'): Promise<string[]> {
    const {data} = await this.client.currencies({ type: type });
    const currencies = Object.keys(data)
    return currencies // returns list of names of the currencies
  }

  async getLatestExchangeRate(baseCurrency: string = "USD", currencies: string[] = ['INR'], type: CurrencyType = 'fiat'): Promise<Record<string, CurrencyRate>> {
    const {data} = await this.client.latest({
      base_currency: baseCurrency.toUpperCase(),
      currencies: currencies.reduce((x,y) => x.toUpperCase() + ',' + y.toUpperCase()),
      type: type
    });

    return data
  }
}

export default new CurrencyAPI();

