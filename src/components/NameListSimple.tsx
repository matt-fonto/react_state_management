import { useState } from "react";

export function NameList() {
  // When dealing with [], JS gives us a reference to it, not the value itself
  const [list, setList] = useState<string[]>(["Batman", "IronMan", "Thanos"]);
  const [name, setName] = useState("hey");

  function handleSubmit() {
    // if we don't add the e.preventDefault, since we had a change in the state
    // react would re-render, then we'd lose what we added
    // e.preventDefault();

    // This doesn't work because our setter needs a new value, otherwise, it thinks
    // that we doesn't need to make anything
    // list.push(name);
    // setList(name);

    // We create a new array with the values of the old + the new
    setList((prev) => [...prev, name]);
    setName("");
  }

  return (
    <>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <input
        type="text"
        value={name}
        // the last thing the user typed
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
