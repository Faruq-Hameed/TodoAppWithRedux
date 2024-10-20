/**
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,

        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

/**
 * Here we have two actions—ADD_TODO and TOGGLE_TODO—that 
 * are responsible for adding a new record in the list and
 *  marking a record complete using their respective actions.We 
 * are able to determine the type of actions using action.type.
 */
export default todos