import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  color: white;
`

export const ImageAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px;
`

export const Image = styled.img`
  height: 100px;
  width: 100px;
`

export const Text = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
`

export const Button = styled.button`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #06b6d4;
  border: none;
  border-radius: 5px;
  color: #e2e8f0;
  font-family: 'Roboto';
`
