import { Reducer } from 'redux';
import { User } from '../dataelements/user';

const LOGIN = 'qicoo/user/LOGIN';
const LOGOUT = 'qicoo/user/LOGOUT';

export const logIn = () => ({
  type: LOGIN as typeof LOGIN,
});
export const logOut = () => ({
  type: LOGOUT as typeof LOGOUT,
});

type Actions = ReturnType<typeof logIn> | ReturnType<typeof logOut>;

const user: Reducer = (state: User, action: Actions) => {
  switch (action.type) {
    case LOGIN:
      return state;
    // TODO: login
    case LOGOUT:
      return state;
    // TODO: log out
    default:
      return new User('', '', new Date(), new Date());
  }
};

export default user;
