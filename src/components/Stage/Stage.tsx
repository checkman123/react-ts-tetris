import React from 'react'
import Cell from '../Cell/Cell'
import { StyledStage } from './Stage.styles'
import { TETROMINOS } from '../../setup'

export type STAGECELL = [keyof typeof TETROMINOS, string]  //A Tuple [,]
export type STAGE = STAGECELL[][];

type Props = {
    stage: STAGE;
}

const Stage:React.FC<Props> = ({stage}) => {
  return (
    <StyledStage>
        {stage.map(row => row.map((cell, index) => {
            return(<Cell key={index} type={cell[0]}/>)
        }))}
    </StyledStage>
  )
}

export default Stage;