import { getTokenRequest, loginRequest } from 'types';
import Axios from '../Axios';

export const setLogin = (req: loginRequest) =>
  Axios.post('auth/login', req).then(({ data }) => data);

export const getVerificationToken = (req: getTokenRequest) =>
  Axios.get(`email/send/verification-code?email=${req.email}`).then(
    ({ data }) => data,
  );
