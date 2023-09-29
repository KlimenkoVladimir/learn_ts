import React, { FC, useState, ChangeEvent, MouseEvent, useRef } from "react";

const EventExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };
  const clickHandler2 = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введите текст..."
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Кнопка</button>
      <br />
      <br />
      <input type="text" ref={inputRef} placeholder="Неизменяемый" />
      <button onClick={clickHandler2}>Кнопка</button>
    </div>
  );
};

export default EventExample;
