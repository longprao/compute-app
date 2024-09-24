import styled from 'styled-components'

export const StyledFormWrapper = styled.div`
  width: 100%;

  height: 100%;
`
export const StyledFormRoot = styled.div`
  width: 100%;

  height: 100%;

  display: flex;
  flex-direction: column;
`
export const StyledFormInputWrapper = styled.div<{ noPadding?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: ${props => (props.noPadding ? '0' : '0 20px')};

  @media screen and (max-width: 990px) {
    padding-left: 0;
  }
`
export const StyledHeaderTextWrapper = styled.div`
  width: 100%;
`
export const StyledAbsoluteLoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const StyledFormHeader = styled.header`
  min-height: 60px;
  padding: 2px 20px;
  padding-bottom: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.body.componentsWrapperBg};
  border-bottom: 1px solid ${({ theme }) => theme.body.secondaryBorderBackground};

  @media screen and (max-width: 767px) {
    padding-left: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`
