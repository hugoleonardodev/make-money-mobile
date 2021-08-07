import { CompanyQuote, IntradayPrice } from './types';

const HTTP_NO_CONTENT_STATUS = 204;

/**
 * @see https://dev.to/stroemdev/make-fetch-better-and-your-api-request-methods-easier-to-implement-e9i
 */

class HttpClient {
  private readonly baseUrl: string;

  constructor(_baseUrl?: string) {
    this.baseUrl = _baseUrl || 'https://cloud.iexapis.com/v1/stock/';
  }

  private async _fetchQuote(companySymbol: string, options: RequestInit) {
    const quoteEndPoint = '/quote/?token=pk_2f111dbdf71340fb93e70206a8ee14be';

    const response = await fetch(
      this.baseUrl + companySymbol + quoteEndPoint,
      options
    );

    if (!response.ok) throw new Error(response.statusText);

    if (response.status !== HTTP_NO_CONTENT_STATUS) {
      return response.json();
    }
    return;
  }

  private async _fetchIntraday(companySymbol: string, options: RequestInit) {
    const intradayEndPoint =
      '/intraday-prices/?token=pk_2f111dbdf71340fb93e70206a8ee14be';

    const response = await fetch(
      this.baseUrl + companySymbol + intradayEndPoint,
      options
    );

    if (!response.ok) throw new Error(response.statusText);

    if (response.status !== HTTP_NO_CONTENT_STATUS) {
      return response.json();
    }
    return;
  }

  getQuote(companySymbol: string, options = {}): Promise<CompanyQuote> {
    return this._fetchQuote(companySymbol, {
      ...options,
      method: 'GET',
    });
  }

  getIntraday(companySymbol: string, options = {}): Promise<IntradayPrice[]> {
    return this._fetchIntraday(companySymbol, {
      ...options,
      method: 'GET',
    });
  }
}

export default HttpClient;
