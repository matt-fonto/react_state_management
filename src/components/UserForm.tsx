import { useReducer } from "react";

export function UserForm() {
  const STATE = {
    first: "",
    last: ""
  };

  // Very interesting pattern to use with useReducer
  const reducer = (state, action) => ({
    ...state,
    ...action
  });

  const [state, dispatch] = useReducer(reducer, STATE);

  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
    </div>
  );
}
