import Axios from 'axios';

let createdClient = null;

const createClient = () => {
   if (createdClient) return createdClient;

   const client = Axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      transformRequest: [
         (data, headers) => {
            _set(headers, 'Content-Type', 'application/json');

            return JSON.stringify(data);
         }
      ]
   });

   client.CancelToken = Axios.CancelToken;
   client.isCancel = Axios.isCancel;

   createdClient = client;

   return client;
};

export default createClient;
