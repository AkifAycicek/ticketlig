import { createStore } from 'vuex';
import modules from './modules';

// Create a new store instance.
export const vuexStore = createStore({
   modules
});
