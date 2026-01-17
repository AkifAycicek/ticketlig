import { BaseModel } from './BaseModel';

export interface Seat {
   id: number;
   row: string;
   seat: number;
   isBooked: boolean;
}

type Constructor<T = Seat> = {
   new <M = T>(...args: ConstructorParameters<typeof SeatModel<M>>): SeatModel<M>;
};

export class SeatModel<T = Seat> extends BaseModel<T> {
   static create<T = Seat>(this: Constructor<T>, ...args: ConstructorParameters<typeof this<T>>) {
      const instance = new this(...args);
      return instance as typeof instance & T;
   }
}
