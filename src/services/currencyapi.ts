interface Meta {
  last_updated_at: string;
}

interface CurrencyRate {
  code: string;
  value: number;
}

export interface ResponseType {
  meta: Meta;
  data: Record<string, CurrencyRate>;
}

class CurrencyAPI {
  async getAvailableCurrencies() { }

  async getLatestExchangeRate(): Promise<Record<string, CurrencyRate>> {
    const res = await fetch(`https://api.currencyapi.com/v3/latest`, {
      method: "GET",
      headers: {
        apikey: import.meta.env.VITE_CURRENCY_API_KEY,
      },
    });

    const { data } = await res.json();
    return data as Record<string, CurrencyRate>;
  }
}

export default new CurrencyAPI();
