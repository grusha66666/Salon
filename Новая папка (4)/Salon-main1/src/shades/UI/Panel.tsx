import {ReactNode} from "react";
import css from "./../styles/Panel.module.css"

interface IPanelProps{
    children?: ReactNode;
 
}

function Panel(props: IPanelProps){
    return(
        <div className={css.panel}>
         
            {props.children}
        </div>
    )
}
export default Panel