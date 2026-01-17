import Http from '@/lib/http';

class PayementApi extends Http {
   post<T>(payload: unknown, ...args: Headers[]) {
      return super.post<T>(`payment/`, payload, ...args);
   }
}
export default new PayementApi();
