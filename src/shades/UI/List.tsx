import React, { ReactNode } from "react";
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
    <Teg style={{ listStyleType: finalStyle }}>
      {React.Children.map(children, (child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </Teg>
  );
}

export default List;
