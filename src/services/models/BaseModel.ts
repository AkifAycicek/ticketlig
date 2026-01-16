// BaseModel.ts
// Base class for all models, extending Collection and adding date formatting functionality

import Collection from '@/lib/Collection';
import { isValidDate, localeDateString } from '@/lib/dayjs';

/**
 * Base model class that extends Collection and adds automatic date formatting
 * @template T - Type of items in the collection
 */
export class BaseModel<T = unknown> extends Collection<T> {
   private _dateProperties = new Map();

   /**
    * Constructor that passes arguments to the parent Collection constructor
    * @param args - Arguments for the Collection constructor
    * @returns This instance for method chaining
    */
   constructor(...args: ConstructorParameters<typeof Collection<T>>) {
      super(...args);

      return new Proxy(this, {
         get(target, key) {
            const value = _get(target, key, undefined);

            if (!value) return value;

            if (isValidDate({ value })) {
               if (target._dateProperties.get(key)) {
                  return localeDateString({ value: value, validate: false });
               }

               if (isValidDate({ value })) {
                  target._dateProperties.set(key, true);
                  return localeDateString({ value: value, validate: false });
               }
            }

            return value;
         }
      });
   }
}
