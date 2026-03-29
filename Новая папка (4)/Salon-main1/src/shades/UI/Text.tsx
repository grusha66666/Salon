import { ReactNode } from "react";
import css from "./../styles/Text.module.css";

interface ITextProps {
    children: ReactNode;
    size?: number | string;
    variant?: "title" | "subtitle";
}

function Text({ children, size = 14, variant = "subtitle" }: ITextProps) {
    const className = variant === "title" ? css.title : css.text;

    return (
        <p 
            style={{ fontSize: size + "pt" }} 
            className={className}
        >
            {children}
        </p>
    );
}

export default Text;