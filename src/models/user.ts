import type { Effect, Reducer } from 'umi';
import { queryLogin } from '@/services/user';
import { message } from 'antd';

export interface ModelType {
  namespace: string;
  state: {
    userInfo: any;
  };
  effects: {
    login: Effect;
  };
  reducers: {
    updateToView: Reducer;
  };
}

const Model = {
  namespace: 'user',
  state: {
    userInfo: {},
  },
  effects: {
    *login({ payload, callback }, { call, put }) {
      const res = yield call(queryLogin, payload);
      if (res.success) {
        yield put({
          type: 'updateToView',
          // payload: {
          //   userInfo: res.data.loginRes,
          // },
        });
        if (callback) callback(res.success);
        message.success('登录成功');
      } else {
        message.warning(res.message);
      }
    },
  },
  reducer: {
    updateToView(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default Model;
