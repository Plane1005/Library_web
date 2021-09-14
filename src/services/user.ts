import { request } from 'umi';

// 登录
export function queryLogin(payload: any) {
  // console.log(payload);
  return request('/api/token/login', {
    method: 'POST',
    ...payload,
  });
}

// 获取用户信息
export function getUserInfo() {
  return request(`/api/token/userinfo`, {
    method: 'GET',
  });
}
