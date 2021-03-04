import { authTypes } from '../actions/action-types';

const initialState = {
    isAuth: false,
    user: null
};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.REGISTER_USER:
            return { isAuth: true, user: action.payload };
        case authTypes.LOG_IN_USER:
            return { isAuth: true, user: action.payload };
        case authTypes.LOG_OUT_USER:
            return { isAuth: false, user: null };

        default:
            return state;
    }
};
export default authReducer;
