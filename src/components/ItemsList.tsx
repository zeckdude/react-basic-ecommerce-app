import { ReactNode } from "react";

type ItemsListProps = {
  children: ReactNode
}

export function ItemsList({ children }: ItemsListProps) {
  return (
    <ul className="items">
      {children}
    </ul>
  );
}
