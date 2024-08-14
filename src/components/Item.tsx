
import { ReactNode } from "react";

type ItemProps = {
  title: string
  body: ReactNode
  children?: ReactNode
}

export function Item({ title, body, children }: ItemProps) {
  return (
    <li className="item">
      <p className="item-title">{title}</p>
      <div className="item-contents">
        <p className="item-body">{body}</p>
        <div className="item-extras">
          {children}
        </div>
      </div>
    </li>
  )
}

