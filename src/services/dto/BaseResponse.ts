// BaseResponse.ts
// This file defines a base class for handling API responses with type safety
// and collection functionality

import Collection from '@/lib/Collection';
import { AxiosHeaders, AxiosResponse } from 'axios';

// Type alias for constructor functions that can create instances of BaseResponse
type Constructor<T> = {
   new <M = T>(...args: ConstructorParameters<typeof BaseResponse<M>>): BaseResponse<M>;
};

/**
 * Interface defining the merged response functionality
 * This interface is used to extend the BaseResponse class with additional mapping capabilities
 */
interface MergedResponse<T> {
   //TODO: Intellisense cannot access the T under the InstanceType<M>._data
   _map<M extends typeof Collection<T>>(model: M): this & InstanceType<M>[];
}

/**
 * Base class for handling API responses with type safety and collection functionality
 * This class extends the Collection class to provide additional response handling capabilities
 */
class BaseResponse<T = unknown> extends Collection<T> {
   private _merged: boolean = false;

   /**
    * Merges the given values into the response
    * Handles AxiosResponse objects by extracting the data
    * @param values - The values to merge, can be either T or AxiosResponse
    * @returns this & MergedResponse<T> - The merged response with additional mapping capabilities
    */
   _merge(values: T | AxiosResponse): this & MergedResponse<T> {
      if (_has(values, 'headers') && values.headers instanceof AxiosHeaders) {
         values = _get(values, 'data.data') as T;
      }

      this._merged = true;
      return super._merge(values) as this & MergedResponse<T>;
   }

   /**
    * Maps the response data to instances of the provided model class
    * @param model - The model class to use for mapping
    * @returns this & InstanceType<M>[] - The mapped response data
    */
   protected _map<M extends typeof Collection>(model: M): this & InstanceType<M>[] {
      if (!_isArray(this._data) && !this._merged) {
         return this as this & InstanceType<M>[];
      }

      this._state = _values(this._data).map((item) => model.create<T>(item)) as T[];
      return this as this & InstanceType<M>[];
   }

   /**
    * Static factory method to create instances of BaseResponse
    * @param this - The constructor function
    * @param args - Arguments to pass to the constructor
    * @returns instance as typeof instance & T - The created instance with type safety
    */
   static create<T = unknown>(
      this: Constructor<T>,
      ...args: ConstructorParameters<typeof this<T>>
   ) {
      const instance = new this(...args);
      return instance as typeof instance & T;
   }
}

export default BaseResponse;
