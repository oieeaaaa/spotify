import axios from 'axios';

import config from '../../../config';
import qs from 'querystring';
import store from '../../../redux/store';

const { api } = config;

async function getToken() {
  const {
    data: { access_token: token },
  } = await axios.post(
    api.authUrl,
    qs.stringify({ grant_type: 'client_credentials' }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${api.clientId}:${api.clientSecret}`)}`,
      },
    }
  );
  store.dispatch({ type: 'SET_TOKEN', payload: token });
}

export { getToken };
