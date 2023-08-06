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

export const StyleContent = styled.div `
  width: 100%;
  height: 90%;
  border-radius: 20px 20px 0 0;
  padding: 10px;

  h1 {
    font-size: 15px;
    font-weight: bold;
    color: #333333;
  }

  p {
    width: 100%;
    height:100%;
    padding: 15px 20px;
    font-size: 14px;
    border-top: 1px solid #D9D9D9;
    color: #4F4F4D;
    word-wrap: break-word;
  }
`

export const StyleButton = styled.button `
  border: none;
  cursor: pointer;
`

export const ContainerButtonsCards = styled.div `
  display: flex;
  justify-content: space-between;
  padding:10px;
`

export const ContentEditPost = styled.div `
  background-color: #FFFFFF;
  height: 100%;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
  }

  textarea {
    height: 100%;
    border: none;
    resize: none;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding: 15px 20px;
    outline: none;
  }

  input {
    padding: 10px;
    outline: none;
    color: #333333;
    font-weight: bold;

    ::placeholder {
      color: #333333;
      font-weight: bold;
    }
  }
`