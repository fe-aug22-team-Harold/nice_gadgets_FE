import { client } from '../utils/fetch';
import { Phone } from '../types/Phone';

export function fetchPhonesPage(page: number, onPage: number) {
  return client.get<Phone[]>(`/products?page=${page}&onPage=${onPage}`);
}
