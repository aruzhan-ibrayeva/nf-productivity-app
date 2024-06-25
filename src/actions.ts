// Action types
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export interface Task {
    id: number;
    name: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
}


interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: Task;
}

interface RemoveTaskAction {
    type: typeof REMOVE_TASK;
    payload: number; 
}

interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
}

interface LogoutAction {
    type: typeof LOGOUT;
}



export type TaskActionTypes = AddTaskAction | RemoveTaskAction;
export type UserActionTypes = SetUserAction | LogoutAction;



export const addTask = (task: Task): AddTaskAction => ({
    type: ADD_TASK,
    payload: task,
});

export const removeTask = (taskId: number): RemoveTaskAction => ({
    type: REMOVE_TASK,
    payload: taskId,
});

export const setUser = (user: User): SetUserAction => ({
    type: SET_USER,
    payload: user,
});

export const logout = (): LogoutAction => ({
    type: LOGOUT,
});
