import styled from 'styled-components'

export const ContentCard = styled.div `
  background-color: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 20px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  width: 390px;
  height: 437.588px;

  @media (max-width: 450px) {
    width: 300px;
  }
`

export const StyleTitle = styled.div `
  width: 100%;
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid #D9D9D9;
  padding: 10px;

  h1 {
    font-size: 15px;
    font-weight: bold;
    color: #333333;
  }
`

export const StyleText = styled.div `
  width: 100%;
  height: 80%;
  padding: 15px 20px;
  font-size: 14px;
  color: #4F4F4D;
  word-wrap: break-word;
`

export const StyleButton = styled.button `
  border: none;
  width: 100%;
  cursor: pointer;
`

export const ContainerButtonsCards = styled.div `
  display: flex;
  justify-content: space-between;
  padding:10px
`