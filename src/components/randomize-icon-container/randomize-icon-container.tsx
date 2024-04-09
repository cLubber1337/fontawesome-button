import { UiButton } from '../ui-button/ui-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons } from '../../share/faIconsData'
import { useState } from 'react'
import s from './randomize-icon-container.module.css'

export const RandomizeIconContainer = () => {
  const [iconNumber, setIconNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  function randomizeIcon() {
    setIsLoading(true)
    setTimeout(() => {
      setIconNumber(Math.floor(Math.random() * faIcons.length))
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={s.randomizeIconContainer}>
      <FontAwesomeIcon className={s.faIcon} spin={isLoading} icon={faIcons[iconNumber]} />
      <UiButton disabled={isLoading} onClick={randomizeIcon}>
        Randomize Icon
      </UiButton>
    </div>
  )
}
