import { revenueTrendContainer } from '@/services/home';
const UserModel = {
  namespace: 'home',
  state: {
    currentUser: {},
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(revenueTrendContainer);
      console.log(response);
      //   yield put({
      //     type: 'save',
      //     payload: response,
      //   });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },
  },
};
export default UserModel;
