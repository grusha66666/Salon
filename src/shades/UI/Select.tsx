
import { ChangeEvent } from "react";


interface IOptions {
    text: string;
    value: number;
}

interface ISelectProps {
    Arroptios?: IOptions[],
    changeAction?: (value: string) => void,
    optionDefault?: string;

}

function Select({ Arroptios = [{ text: "", value: 0 }], changeAction = () => { } }: ISelectProps) {

    function handelChange(event: ChangeEvent<HTMLSelectElement>) {
        changeAction(event.target.value)
    }
    return (
        <select 
            onChange={handelChange}>
            {Arroptios.map((option) => <option value={option.value}>{option.text}</option>)}
        </select>
    )
}

export default Select

