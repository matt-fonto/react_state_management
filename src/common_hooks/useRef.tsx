// Associate state with a component
// When we change the value of a reference, no re-render happens

import { useEffect, useRef, useState } from "react";

type User = {
  id: number;
  name: string;
};

export function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(1);
  const [users, setUsers] = useState<User[]>([
    {
      id: idRef.current++,
      name: "James"
    },
    {
      id: idRef.current++,
      name: "Susan"
    }
  ]);

  // useEffect(() => {
  //   const target = inputRef.current;
  //   if (target) {
  //     target.focus();
  //   }
  // }, []);

  const onAdd = () => {
    const target = inputRef.current;

    if (target && target.value !== "") {
      setUsers([
        ...users,
        {
          idRef: idRef.current++,
          name: inputRef.current.value
        }
      ]);
      target.value = "";
    }
  };

  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            {user.id}-{user.name}
          </li>
        ))}
      </ul>

      <input type="text" ref={inputRef} />
      <button onClick={onAdd}>Add Name</button>
    </>
  );
}
