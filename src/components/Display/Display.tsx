import React from 'react'
import { StyledDisplay } from './Display.styles'
import { TETROMINOS } from '../../setup'

type Props = {
  gameOver?: boolean;
  text: string;
};

const Display:React.FC<Props>= ({gameOver, text}) => {
  return (
    <StyledDisplay gameOver={gameOver}>
        {text}
    </StyledDisplay>
  )
}

export default Display;