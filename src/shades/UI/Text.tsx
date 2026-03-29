import { ReactNode } from "react";

interface ITextProps {
  children?: ReactNode;
  size?: number | string;
}


function Text({children, size = 14} : ITextProps){
    return(
        <p 
            style={{fontSize: size + "pt"}}>
            {children}
        </p>
    )
}

export default Text