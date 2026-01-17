import Http from '@/lib/http';

class SeatPlanApi extends Http {
   list<T>(eventId: number, evenCategoryId: number, ...args: Headers[]) {
      return super.get<T[]>(`seat-plans/${eventId}/${evenCategoryId}`, ...args);
   }
}
export default new SeatPlanApi();
