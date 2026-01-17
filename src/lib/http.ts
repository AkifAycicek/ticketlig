import createAxiosClient from '@/lib/create-axios-client';
import { AxiosInstance } from 'axios';

interface Http {}

class Http {
   protected client: AxiosInstance = createAxiosClient();

   protected options<T>(url: string, options?: Headers) {
      return this.client.request<{ data?: T }>({ method: 'OPTIONS', url, ...options });
   }

   protected head<T>(url: string, options?: Headers) {
      return this.client.request<{ data?: T }>({ method: 'HEAD', url, ...options });
   }

   protected get<T>(url: string, options?: Headers) {
      return this.client.request<{ data?: T }>({ method: 'GET', url, ...options });
   }

   protected delete<T>(url: string, options?: Headers) {
      return this.client.request<{ data?: T }>({ method: 'DELETE', url, ...options });
   }

   protected post<T>(url: string, data: T | unknown, options?: Headers) {
      return this.client.request<{ data?: T }>({ method: 'POST', url, data, ...options });
   }

   protected put<T>(url: string, data: unknown, options?: Headers) {
      return this.client.request<{ data?: T }>({ method: 'PUT', url, data, ...options });
   }

   protected patch<T>(url: string, data: unknown, options?: Headers) {
      return this.client.request<{ data?: T }>({ method: 'PATCH', url, data, ...options });
   }
}

export default Http;
