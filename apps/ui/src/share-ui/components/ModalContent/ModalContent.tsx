import { FC, ReactElement } from 'react'

import L3ComponentProps from '../../types/L3ComponentProps'
import styled from 'styled-components'
// import classes from "./ModalContent.module.scss";

interface ModalContentProps extends L3ComponentProps {
  children: ReactElement | ReactElement[] | string
}

const ModalContent: FC<ModalContentProps> = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>
}

Object.assign(ModalContent, {
  displayName: 'ModalContent',
})

export default ModalContent

const StyledModalContent = styled.div`
  flex-grow: 1;
`
