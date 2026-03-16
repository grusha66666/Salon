import React, { ReactNode } from "react";
import css from "./../styles/List.module.css"
interface IListProps {
  children?: ReactNode;
  type?: "ordered" | "unordered";
  listStyle?: string;
}

function List({
  children,
  type = "ordered",
  listStyle
}: IListProps) {
  const Teg = type === "ordered" ? "ol" : "ul";
  const defoltStyle = type === "ordered" ? "decimal" : "disc"
  const finalStyle = listStyle || defoltStyle
  return (
    <Teg className={css.list} style={{ listStyleType: finalStyle }}>
      {React.Children.map(children, (child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </Teg>
  );
}

export default List;
