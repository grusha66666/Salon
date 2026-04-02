import { ReactNode } from "react";
import css from "./../styles/Text.module.css";

interface ITextProps {
    children: ReactNode;
    size?: number | string;
}

function Text3({ children, size = 14,  }: ITextProps) {
    const className = css.text3;

    return (
        <p 
            style={{ fontSize: size + "pt" }} 
            className={className}
        >
            {children}
        </p>
    );
}

export default Text3;