import { BaseModel } from './BaseModel';

type Constructor<T = unknown> = {
   new <M = T>(...args: ConstructorParameters<typeof PaymentModel<M>>): PaymentModel<M>;
};

export class PaymentModel<T = unknown> extends BaseModel<T> {
   static create<T = unknown>(
      this: Constructor<T>,
      ...args: ConstructorParameters<typeof this<T>>
   ) {
      const instance = new this(...args);
      return instance as typeof instance & T;
   }
}
