import { ReactNode } from "react";
import css from "./../styles/Link.module.css"

interface ILinkProps{
    children?: ReactNode;
    href?: string;
}

function Link({children,href="/"}: ILinkProps){

    let text = children ? children : href

return (
    <a className={css.link} href={href}>{text}</a>
)
}

export default Link