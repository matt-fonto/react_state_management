import { useState } from "react";

type Character = {
  name: string;
  age: number;
  isAlive: boolean;
};

export function NameList() {
  // When dealing with [], JS gives us a reference to it, not the value itself
  const [list, setList] = useState<Character[]>([
    {
      name: "Batman",
      age: 35,
      isAlive: true
    },
    {
      name: "IronMan",
      age: 40,
      isAlive: false
    },
    {
      name: "Thanos",
      age: 1000,
      isAlive: false
    }
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isAlive, setIsAlive] = useState(true);

  function handleSubmit() {
    const newPerson = {
      name,
      age: parseInt(age, 10),
      isAlive
    };

    setList((prev) => [...prev, newPerson]);
    setName("");
    setAge("");
    setIsAlive(true);
  }

  return (
    <>
      <ul>
        {list.map((person) => (
          <li key={person.name}>
            {person.name} - {person.age} years old - {""}
            {person.isAlive ? "Alive" : "Dead"}
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="name"
        value={name}
        // the last thing the user typed
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        value={age}
        // the last thing the user typed
        onChange={(e) => setAge(e.target.value)}
      />

      <label>
        Is Alive?
        <input
          type="checkbox"
          checked={isAlive}
          onChange={(e) => setIsAlive(e.target.checked)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
