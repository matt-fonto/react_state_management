import { useCallback, useMemo, useState } from "react";

function SortedList({ list, sortFunc }) {
  console.log("SortedList Render");

  const sortedList = useMemo(() => {
    console.log("running sort");

    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>{sortedList.join(", ")}</div>;
}

export function UseCallback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const countTotal = count1 + count2;

  const [names] = useState(["Bob", "Mary", "John", "Susan", "Avril"]);

  const sortFunc = useCallback((a, b) => {
    console.log("render sortFunc 1");

    a.localeCompare(b) * -1;
  }, []);

  // When should we use useCallback?
  // 1. If the callback we're creating (onClick, onChange) is being passed as a prop to another component
  // 2. When we create a custom hook

  return (
    <>
      <SortedList list={names} sortFunc={sortFunc} />
      <button onClick={() => setCount1(count1 + 1)}>Count 1</button>
      <button onClick={() => setCount2(count2 + 1)}>Count 2</button>

      <div>{countTotal}</div>
    </>
  );
}
