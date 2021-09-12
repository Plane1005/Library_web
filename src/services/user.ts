import { request } from 'umi';

// 登录
export function queryLogin(payload: any) {
  return request('/api/base/token/login', {
    method: 'POST',
    ...payload,
  });
}
