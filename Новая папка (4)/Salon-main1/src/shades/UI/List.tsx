import React from 'react';
import css from "../../shades/styles/List.module.css";

interface ListProps {
  children: React.ReactNode;
  type?: 'ordered' | 'unordered';
  listStyle?: string;
  className?: string;
}

const List: React.FC<ListProps> = ({ 
  children, 
  type = 'unordered', 
  listStyle = 'none', 
  className 
}) => {
  const Tag = type === 'ordered' ? 'ol' : 'ul';
  const finalStyle = listStyle;

  return (
    <Tag 
  className={`${css.card} ${className || ''}`} 
  style={{ listStyleType: finalStyle, padding: 0, margin: 0 }}
>
  {children}
</Tag>
  );
};

export default List;