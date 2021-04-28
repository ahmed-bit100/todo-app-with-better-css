import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./actionTypes";

const init = {
  tasks: [{ id: Math.random(), action: "wake up", isDone: true }],
};

const taskReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) => (el.id === payload.id ? payload : el)),
      };
    default:
      return state;
  }
};

export default taskReducer;
