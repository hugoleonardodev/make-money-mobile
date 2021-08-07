import HttpClient from './HttpClient';

export class ApiClient extends HttpClient {
  constructor() {
    super('/api');
  }
}

export default new ApiClient();
