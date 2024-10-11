import React, { ReactNode } from 'react'

 
interface ContainerProps{
children:ReactNode;
className?:string;

}
export default function Container({children,className}:ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 lg:px-8 ${className}`}>{children}</div>
  )
}
