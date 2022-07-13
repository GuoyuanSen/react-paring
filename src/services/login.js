import request from '@/utils/request';
import { encrypt } from '../utils/utils';
export async function fakeAccountCode() {
  return request('/auth/code', {
    method: 'GET'
  });
}
export async function fakeAccountLogin(params) {
  params.loginPassword = encrypt(params.loginPassword);
  console.log(params)
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(params),
    requestType:'application/json'
  });
}
