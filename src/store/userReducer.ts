import { SET_USER, LOGOUT, UserActionTypes } from 'actions';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default userReducer;
