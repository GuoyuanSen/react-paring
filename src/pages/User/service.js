import request from '@/utils/request';
import { encrypt } from '../../utils/utils';
//获取验证码
export async function userCode() {
  return request('/auth/code', {
    method: 'GET'
  });
}
//登录
export async function userLogin(params) {
  params.loginPassword = encrypt(params.loginPassword);
  return request('/auth/login', {
    method: 'POST',
    body: params,
    requestType:'application/json'
  });
}
//获取用户信息
export async function userInfo() {
  return request('/auth/user/info', {
    method: 'GET'
  });
}

