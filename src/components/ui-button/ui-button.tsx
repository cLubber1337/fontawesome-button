import { ComponentPropsWithoutRef } from 'react'
import s from './ui-button.module.css'

type UiButtonProps = {
  children: React.ReactNode
} & ComponentPropsWithoutRef<'button'>

export const UiButton = ({ children, ...props }: UiButtonProps) => {
  return (
    <button className={s.uiButton} {...props}>
      {children}
    </button>
  )
}
