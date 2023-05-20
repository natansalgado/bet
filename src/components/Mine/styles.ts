import styled from 'styled-components'
import { colors } from '../../styles/global'

const { background, button, buttonHover } = colors

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #212121;
  height: 500px;
  max-width: 800px;
  margin: 10px auto;
  border: #333 solid 2px;
  border-radius: 10px;
`
export const Section = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Bet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 300px;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 10px;

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 16px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
`

export const Label = styled.label`
  font-size: 20px;
  line-height: 40px;
`

export const Input = styled.input`
  background: #0007;
  outline: none;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 10px;
  text-align: center;
`

export const Game = styled.div`
  display: flex;
  flex-wrap: wrap;

  height: 100%;
  background: #212121;
  width: calc(100% - 300px);
  border-radius: 0 10px 10px 0;
  position: relative;

  .back {
    transition: .2s;
    cursor: pointer;
    
    &:hover {
      scale: 1.1;
      filter: brightness(1.4);
    }
  }
`

export const Spot = styled.button`
  background: #111;
  height: calc(100% / 5);
  width: calc(100% / 5);
  font-size: 50px;
  border-radius: 10px;
  border: 2px #212121 solid;
`

export const Footer = styled.div`
  display: flex;

  width: 100%;
  background: ${background};
  border-radius: 0 0 10px 10px;
  padding: 5px 0`

export const Button = styled.button`
  background: ${button};
  font-size: 20px;
  outline: none;
  border: none;
  width: calc(300px - 30px);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;
  margin: 0 15px;

  @media (max-width: 600px) {
    font-size: 15px;
  }

  &:hover {
    background: ${buttonHover};
    scale: 1.1;
  }
`

export const Modal = styled.span`
  height: 100%;
  margin: 0 auto;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
  max-width: calc(100% - 270);
`