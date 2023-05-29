import {useState} from "react";

export default function Home() {
  const [counterNumbers, setCounterNumbers] = useState([1, 2, 3, 4]);

  const handleAdd = () => {
    setCounterNumbers(nums => nums.length > 0 ? [...nums, nums.at(-1) + 1] : [1]);
  };
  const handleReset = () => {
    setCounterNumbers([]);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {counterNumbers.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </div>
  );
}
