import { useReducer } from "react";

// useReducer = great for managing complex states
export function UseReducer() {
  // initialState
  const STATE = {
    names: [],
    name: ""
  };

  // our reducer function takes the current state and some action
  // action = { type, payload }
  const reducer = (state, action) => {
    // we dispatch an object with a type on it
    switch (action.type) {
      case "SET_NAME": //this is the type
        // action.payload = what is sent
        // we return all the existing fields and just override the ones we need
        return { ...state, name: action.payload };
      case "ADD_NAME":
        // return an obj with all existing state
        // but override names with a new array with all previous names
        // and our payload
        return { ...state, names: [...state.names, state.name], name: "" };
    }
  };

  // const [state, dispatch] = useReducer(reducer, initialState)
  // useState = [value, setValue]
  // useReducer = similar to useState, returns an array with 2 elements
  // useReducer = [state, dispatch]
  // state = currentState
  // dispatch = a way to invoke the reducer function
  const [state, dispatch] = useReducer(reducer, STATE);

  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={state.name}
        onChange={(e) =>
          // in every change, we dispatch our action with an object
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />

      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add name</button>

      {state.names.map((name: string) => (
        <ul>
          <li>{name}</li>
        </ul>
      ))}
    </>
  );
}
