import { UiButton } from '../ui-button/ui-button'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from './randomize-icon-container.module.css'

export const RandomizeIconContainer = () => {
  return (
    <div className={s.randomizeIconContainer}>
      <FontAwesomeIcon className={s.faIcon} icon={faHouse} />
      <UiButton>Randomize Icon</UiButton>
    </div>
  )
}
