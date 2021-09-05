import { Reducer, Effect, Subscription } from 'umi'
import { getRemoteList } from './service'

interface UserModelType {
  namespace: 'users'
  state: {}
  reducers: {
    getList: Reducer
  }
  effects: {
    getRemote: Effect
  }
  subscriptions: {
    setup: Subscription
  }
}

const UserModel: UserModelType = {
  namespace: 'users',
  state: {
      data: []
  },
  reducers: {
    getList(state: any, { payload }) {
      return {
          ...state,
          data: [...payload]
      }
    },
  },
  effects: {
    *getRemote({ payload }, { put, call }) {
      const data = yield call(getRemoteList)
      yield put({
        type: 'getList',
        payload: data.data || [],
      })
    },
  },
  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote',
          })
        }
      })
    },
  },
}

export default UserModel
