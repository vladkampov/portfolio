import config from '../config';
import api from './';

const CORE_END_POINT_AUTH_URL = `${config('CORE_API_DOMAIN')}/short-it`;

export const short = data =>
    api(({ post }) => post(CORE_END_POINT_AUTH_URL, { data }));
