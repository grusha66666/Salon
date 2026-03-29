import {ReactNode} from "react";

interface IPanelProps{
    children?: ReactNode;
 
}

function Panel(props: IPanelProps){
    return(
        <div>
         
            {props.children}
        </div>
    )
}
export default Panel