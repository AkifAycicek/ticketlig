import Http from '@/lib/http';

class EventApi extends Http {
   list<T>(...args: Headers[]) {
      return super.get<T[]>(`events`, ...args);
   }

   get<T>(id: string, ...args: Headers[]) {
      return super.get<T>(`events/${id}`, ...args);
   }
}
export default new EventApi();
