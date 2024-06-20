import { useState } from "react";
import { Button } from "./Button";
import { CounterValue } from "./CounterValue";
import { WithSpecialCounter } from "./withSpecialCounter";
const SpecialCountervalue=WithSpecialCounter(CounterValue)
function Container() {
  const [counter, setCounter] = useState(0);
  const decreaseHandler = () => {
    setCounter(counter - 1);
  };

  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <Button clickHandler={decreaseHandler} label="Decrease" ><h1>This is decrement button</h1></Button>
      <SpecialCountervalue counter={counter} />
      <Button clickHandler={increaseHandler} label="increase" ><h1>This is increment button</h1></Button>
    </div>
  );
}

export default Container;
