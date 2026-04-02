import { ReactNode } from "react";
import style from "./../styles/Button.module.css";

interface IButtonProps{
    children?: ReactNode;
    clickAction?: () => void;
}

function Button ({children,clickAction = () => {} } : IButtonProps){
    return(
    <button  onClick={clickAction} className={style.button}>
        {children}
    </button>)
}

export default Button