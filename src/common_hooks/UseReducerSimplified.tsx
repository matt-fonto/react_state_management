import { useReducer } from "react";

export function UseReducer() {
  // We can simplify the useReducer very much simply by destructuring it
  // Nice pattern for useReducer
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action
    }),
    {
      first: "",
      last: ""
    }
  );

  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={state.name}
        onChange={(e) => dispatch({ first: e.target.value })}
      />

      <input
        type="text"
        placeholder="last"
        value={state.name}
        onChange={(e) => dispatch({ last: e.target.value })}
      />

      <div>
        First: {state.first} Last:{state.last}
      </div>
    </>
  );
}
