import { ReactNode } from "react";

interface IButtonProps{
    children?: ReactNode;
    clickAction?: () => void;
}

function Button ({children,clickAction = () => {} } : IButtonProps){
    return(
    <button  onClick={clickAction}>
        {children}
    </button>)
}

export default Button