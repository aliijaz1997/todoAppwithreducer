let assignId = 7;
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state.todos,
        todos: [
          ...state.todos,
          {
            id: assignId++,
            title: action.title,
            description: action.description,
            done: action.done,
          },
        ],
      };
    default:
      return state;
  }
};
