// app/src/lib/Form.ts

import Validator from '@/plugins/validatorjs';
import { DetailedDiff, detailedDiff, diff, updatedDiff } from 'deep-object-diff';
import { PropertyName } from 'lodash';
import { Errors, Rules, TypeCheckingRule } from 'validatorjs';

// @ts-ignore
import ValidatorErrors from 'validatorjs/src/errors';
import Collection from './Collection';

export type FormCreate<T> = InferReturn<typeof Form.create<T>>;

export class Form<T = any> extends Collection<T> {
   protected _rules = reactive({});
   protected _autoValidate = ref<Array<keyof T> | boolean>(false) as unknown as
      | Array<keyof T>
      | boolean;
   protected _customAttributeNames = reactive<{ [key: PropertyName]: '' }>({});

   _errors = reactive<Errors>(new ValidatorErrors());
   _isValid = ref(false) as unknown as boolean;

   readonly _changedData = computed(() =>
      diff(this._defaults, this._data as Ref<T & object>)
   ) as unknown as Partial<T>;

   readonly _isChanged = computed(() => {
      return _size(this._changedData) > 0;
   }) as unknown as boolean;
   readonly _detailedChagedData = computed(() =>
      detailedDiff(this._defaults, this._data as Ref<T & object>)
   ) as unknown as DetailedDiff;

   constructor({
      data = {} as T,
      rules = {} as any,
      autoValidate = []
   }: {
      data?: T;
      rules?: { [P in Path<T>]?: string | Array<string | TypeCheckingRule> | Rules };
      autoValidate?: Array<keyof T> | boolean;
   } = {}) {
      super(data);

      _set(this, '_autoValidate', autoValidate);

      this._setRules(rules);

      return this;
   }

   protected _initWatcher() {
      watch(
         () => [this._autoValidate, this._data, this._rules],
         ([validateAttributes, changedData, changedRules]: any) => {
            if (validateAttributes === true) {
               this._validate(_keys(updatedDiff(changedData, changedRules)) as Path<T>[]);
               return;
            }

            if (_isArray(validateAttributes) && _size(validateAttributes) > 0) {
               const rules = _pick(changedRules, validateAttributes) as Rules;
               this._validate(null, rules);
            }
         },
         { deep: true }
      );
      return this;
   }

   _validate(keys: Array<Path<T>> | null = null, rules: Rules = this._rules): boolean {
      let values: Partial<T> = this._data;

      if (_isArray(keys)) {
         values = _pick(this._data, keys);
         rules = _pick(rules, keys);
      }

      const validation = new Validator(values, rules);

      validation.setAttributeNames(this._customAttributeNames);

      const passed = validation.passes();

      _assign(this._errors, validation.errors);

      this._isValid = !!passed;

      return this._isValid;
   }

   _reset(attrs = this._defaults as Partial<T>): this {
      super._reset(attrs as T);

      this._errors = reactive<Errors>(new ValidatorErrors());

      return this;
   }

   _setRules(rules = {}): this {
      this._rules = reactive(rules);
      return this;
   }

   _setCustomAttributeNames(names: { [key: PropertyName]: string }): void {
      _assign(this._customAttributeNames, names);
   }

   _toggleAutoValidate(value?: boolean): this {
      this._autoValidate = !_isBoolean(value) ? value : !this._autoValidate;
      return this;
   }

   _checkPoint(keys: Path<T>[] | string[] = _keys(this._changedData)) {
      return this._setDefaults(_merge({}, this._defaults, _pick(this._changedData, keys)));
   }

   static create<T = any>(...args: ConstructorParameters<typeof Form<T>>) {
      const proxy = super.create<T>(
         ...(args as unknown as ConstructorParameters<typeof Collection<T>>)
      ) as Form<T> & Form<T>['_data'];
      return proxy._initWatcher();
   }
}
