import { ReactNode } from "react";

interface ILinkProps{
    children?: ReactNode;
    href?: string;
}

function Link({children,href="/"}: ILinkProps){

    let text = children ? children : href

return (
    <a href={href}>{text}</a>
)
}

export default Link