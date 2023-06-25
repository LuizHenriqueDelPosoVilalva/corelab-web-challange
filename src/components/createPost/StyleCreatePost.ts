import styled from 'styled-components'

export const ContainerCreatePost = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const ContentCreatePost = styled.div `
  background-color: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  height: 200px;
  width: 50%;

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  textarea {
    height: 100%;
    border: none;
    resize: none;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding: 15px 20px;
    outline: none;
    border-radius: 0 0 3px 3px
  }

  input {
    padding: 10px;
    border: 1px solid #D9D9D9;
    outline: none;
    color: #333333;
    font-weight: bold;

    ::placeholder {
      color: #333333;
      font-weight: bold;
    }
  }
`