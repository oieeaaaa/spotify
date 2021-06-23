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

async function handleRequest(path) {
  const token = store.getState().token;
  const res = await axios.get(`${api.baseUrl}/${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
}

async function handleMultipleRequests(requests) {
  return axios
    .all(requests)
    .then(
      axios.spread((...responses) => {
        return responses;
      })
    )
    .catch((errors) => {
      throw errors;
    });
}

export { getToken, handleRequest, handleMultipleRequests };
