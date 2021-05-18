export const initialState = {
  todos: [
    {
      id: 1,
      title: "Learn javascript",
      description: "lorem ipsum",
      done: true,
    },
    {
      id: 2,
      title: "Learn typescript",
      description: "lorem ipsum",
      done: false,
    },
  ],
};
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
