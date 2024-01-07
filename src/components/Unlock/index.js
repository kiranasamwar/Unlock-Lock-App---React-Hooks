import {useState} from 'react'

import {
  MainContainer,
  ImageAndTextContainer,
  Image,
  Button,
  Text,
} from './styledComponents'

const Unlock = () => {
  const [isUnLock, setUnLocked] = useState(false)

  const imageUrl = isUnLock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = isUnLock ? 'UnLock' : 'Lock'

  const text = isUnLock ? 'Your Device is Unlocked' : 'Your Device is Locked'

  const buttonText = isUnLock ? 'Lock' : 'UnLock'

  const onClickButton = () => setUnLocked(prevStatus => !prevStatus)

  return (
    <MainContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}

export default Unlock
