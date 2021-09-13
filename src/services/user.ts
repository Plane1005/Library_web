import { request } from 'umi';

// 登录
export function queryLogin(payload: any) {
  // console.log(payload);
  return request('/api/token/login', {
    method: 'POST',
    ...payload,
  });
}
