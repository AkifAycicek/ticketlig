import { BaseModel } from './BaseModel';

export interface EventVenue {
   id: number;
   name: string;
}

export interface Event {
   id: number;
   title: string;
   description: string;
   image_url: string;
   event_date: string;
   venue: EventVenue;
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
