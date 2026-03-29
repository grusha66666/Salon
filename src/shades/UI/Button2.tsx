import { ReactNode } from "react";
import style from "./../styles/Button.module.css";

interface IButtonProps{
    children?: ReactNode;
    clickAction?: () => void;
}

function Button2 ({children,clickAction = () => {} } : IButtonProps){
    return(
    <button  onClick={clickAction} className={style.button2}>
        {children}
    </button>)
}

export default Button2