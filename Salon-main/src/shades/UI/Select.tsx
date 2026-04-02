

import { ChangeEvent } from "react";
import css from "./../styles/Reviews.module.css"


interface IOptions {
  text: string;
  value: string;
}

interface ISelectProps {
    Arroptios?: IOptions[],
    changeAction?: (value: string) => void,
    optionDefault?: string;

}

function Select({ Arroptios = [{ text: "", value: "" }], changeAction = () => { } }: ISelectProps) {

    function handelChange(event: ChangeEvent<HTMLSelectElement>) {
        changeAction(event.target.value)
    }
    return (
        <select 
        className={css.select}
            onChange={handelChange}>
            {Arroptios.map((option) => <option value={option.value}>{option.text}</option>)}
        </select>
    )
}

export default Select

