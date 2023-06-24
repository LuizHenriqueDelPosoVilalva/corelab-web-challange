import styled from 'styled-components'

export const StyleNav = styled.nav`
  background-color: #FFFFFF;
  padding: 10px;
  width: 100%;
  height: 50px;
`

export const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;

  h1 {
    margin-left: 10px;
    font-weight: bold;
  }

  form {
    width: 70%;
    position: relative;
  }

  input {
    margin-left: 50px;
    width: 73%;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
    outline: none;
  }

  button {
    border: none;
    background-color: #FFFFFF;
    position: absolute;
    left: 75%;
    margin-top: 5px;
    cursor: pointer;

    @media (max-width: 500px) {
      position: absolute;
      left: 80%;
    }
  }
`