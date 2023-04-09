import React from 'react'

import { ButtonAntd } from './Button.styles'
import { ButtonProps } from 'antd'


interface ButtonCurrentProps extends ButtonProps{
    margin?: string

}

const Button = ({ margin, ...props }: ButtonCurrentProps ) => {
  return (
    <div>
      <ButtonAntd type="primary"  {...props} />

    </div>
  )
}

export default Button
