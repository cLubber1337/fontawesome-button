import s from './сentered-wrapper.module.css'

export const CenteredWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={s.centeredWrapper}>{children}</div>
}
