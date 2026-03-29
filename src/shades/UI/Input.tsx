import { ChangeEvent, useState } from "react";
import css from "./../styles/Input.module.css";

interface IInputProps {
  placholder?: string;
  type?: "text" | "number" | "password";
  value?: string | number;
  changeAction?: (value: string) => void;
}

function Input({
  placholder = "введите текст...",
  type = "text",
  value = "",
  changeAction = ()=>{},
}: IInputProps) {
  const [inputValue, setInputValue] = useState(value);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
    changeAction(event.target.value);
  }

  return (
    <input
      className={css.input}
      type={type}
      placeholder={placholder}
      value={inputValue}
      onChange={handleChange}
    />
  );
}

export default Input;

