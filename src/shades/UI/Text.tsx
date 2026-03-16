import { ReactNode } from "react";
import css from "./../styles/Text.module.css";

interface ITextProps {
  children?: ReactNode;
  size?: number | string;
}


function Text({children, size = 14} : ITextProps){
    return(

        <p style={{fontSize: size + "pt"}} className={css.text}>
            {children}
        </p>
    )
}

export default Text