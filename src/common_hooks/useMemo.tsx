import { useMemo, useState } from "react";

export function UseMemo() {
  const [numbers] = useState([10, 20, 30]);

  // Every time we re-render the component, this function is called
  // We just want to recalculate total when the numbers change
  const total = useMemo(
    // the function inside useMemo will only be run when the 'number' values change
    () => numbers.reduce((accumulator, number) => accumulator + number, 0),
    [numbers]
  );

  // When do we want to use useMemo?
  // 1. Expensive calculations: For complex, time-consuming calculations -- we don't want to re-calculate in every re-render
  // 2. With arrays and objects: When we create arrays and objects -- because react compares them by reference

  // When shouldn't we use useMemo?
  // 1. Simple calculations

  const [names] = useState(["A", "B", "C", "D"]);

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <>
      <h2>Total: {total}</h2>
    </>
  );
}
