
import { HTMLAttributes, ReactNode } from "react";
import clsx from 'clsx'

type ItemsContainerProps = {
  title: string
  children: ReactNode
  numItems?: number
  className?: HTMLAttributes<HTMLDivElement>['className']
}

export function ItemsContainer({ title, children, numItems, className }: ItemsContainerProps) {
  return (
    <div className={clsx('item-outer-container', className)}>
      <p className="items-container-title">{title} {typeof numItems === 'number' && `(${numItems})`}</p>
      <div className="item-inner-container">
        {children}
      </div>
    </div>
  );
}
