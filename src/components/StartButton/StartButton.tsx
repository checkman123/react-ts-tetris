import React from 'react'
import Cell from '../Cell/Cell'
import { StyledStartButton } from './StartButton.styles'
import { TETROMINOS } from '../../setup'

type Props = {
    callback: () => void;
}

const StartButton:React.FC<Props> = ({callback}) => {
  return (
    <StyledStartButton onClick={callback}>Start Game!</StyledStartButton>
  )
}

export default StartButton;