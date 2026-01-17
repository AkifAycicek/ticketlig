import { BaseModel } from './BaseModel';
import { Seat } from './SeatModel';

export interface EventVenue {
   id: number;
   name: string;
   address: string;
}

export interface EventCategory {
   id: number;
   name: string;
   price: number;
}

export interface Event {
   id: number;
   title: string;
   description: string;
   image_url: string;
   event_date: string;
   venue: EventVenue;
   event_categories: EventCategory[];
}

export interface EventPaymentPayload {
   eventId: Event['id'];
   eventCategoryId: EventCategory['id'];
   seats: Seat['id'][];
   customer_name: string;
   customer_surname: string;
   customer_email: string;
   cc_number: string;
   cc_exp_month: number;
   cc_exp_year: number;
   cc_exp_cvv: number;
}

type Constructor<T> = {
   new <M = T>(...args: ConstructorParameters<typeof EventModel<M>>): EventModel<M>;
};

export class EventModel<T = Event> extends BaseModel<T> {
   static create<T = Event>(this: Constructor<T>, ...args: ConstructorParameters<typeof this<T>>) {
      const instance = new this(...args);
      return instance as typeof instance & T;
   }
}
