import { ADD_TASK, REMOVE_TASK, TaskActionTypes } from 'actions';

interface Task {
    id: number;
    name: string;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

const tasksReducer = (state = initialState, action: TaskActionTypes): TaskState => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        default:
            return state;
    }
};

export default tasksReducer;
