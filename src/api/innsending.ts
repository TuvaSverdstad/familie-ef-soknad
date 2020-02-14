import { preferredAxios } from './axios';

export const sendInnSøknad = (søknad: object) => {
  return preferredAxios
    .post('/api/soknad', søknad, {
      headers: { 'content-type': 'application/json;charset=utf-8' },
      withCredentials: true,
    })
    .then((response: { data: any }) => {
      return response.data;
    });
};
