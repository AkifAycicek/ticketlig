import { Form, FormCreate } from '@/lib/Form';
import { EventPaymentPayload } from '@/services/models/EventModel';

type CheckoutState = {
   form: FormCreate<EventPaymentPayload>;
};

export default {
   state: (): CheckoutState => ({
      form: Form.create<EventPaymentPayload>({
         data: {
            eventId: null,
            eventCategoryId: null,
            seats: [],
            customer_name: null,
            customer_surname: null,
            customer_email: null,
            cc_number: null,
            cc_exp_month: null,
            cc_exp_year: null,
            cc_exp_cvv: null
         },
         rules: {
            eventId: 'required',
            eventCategoryId: 'required',
            seats: 'required|array',
            customer_name: 'required|string',
            customer_surname: 'required|string',
            customer_email: 'required|string|email',
            cc_number: 'required|credit_card',
            cc_exp_year: 'required|integer',
            cc_exp_month: 'required|integer',
            cc_exp_cvv: 'required|integer'
         }
      })
   }),
   getters: {
      checkoutForm(state: CheckoutState) {
         return state.form;
      }
   }
};
