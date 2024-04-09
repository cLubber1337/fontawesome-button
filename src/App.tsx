import { UiButton } from './components/ui-button/ui-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { CenteredWrapper } from './components/сentered-wrapper/сentered-wrapper'

export default function App() {
  return (
    <CenteredWrapper>
      <UiButton>
        Click <FontAwesomeIcon icon={faHouse} />
      </UiButton>
    </CenteredWrapper>
  )
}
