import { combineReducers } from 'redux';
import tasksReducer from './taskReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
