import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { StyledButton } from '../Button'

const SectionFooterTop = styled.footer`
  background: ${({theme}) => theme.TerciaryColorBlue || "var(--cor-3)"};
  align-items: flex-start;
  padding: 2rem;
  display: flex;
  justify-content: space-around;

  @media (min-width: 360px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

const SectionFooterLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  h1 {
    margin-left: 0.5rem;
    color: ${({theme}) => theme.ColorTitle };
  }

  span {
    color: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
  }
`;

const MenuLinks = styled.ul`
  li {
    padding: 0.5rem;
  }

  a {
    color: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
    font-size: 0.8rem;
    transition: all 300ms ease-out;

    &:hover {
      color: ${({theme}) => theme.SecondaryColorBlue || "var(--cor-2)"};
    }
  }
`;

const FooterForm = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 1rem;
    font-weight: bold;
    color: ${({theme}) => theme.ColorTitle}
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: ${({theme}) => theme.mainStyles.white || "#fff"};
    font-family: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
  }

  input {
    display: block;
    width: 100%;
    padding: 15px 0 15px 8px;
    border: none;
    background-color: #fff;
    outline: none;
    font-family: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
  }

  textarea {
    display: block;
    width: 99%;
    height: 100px;
    padding: 8px;
    border: none;
    background-color: ${({theme}) => theme.mainStyles.white || "#fff"};
    outline: none;
    resize: none;
    font-family: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
  }

  @media (min-width: 360px) and (max-width: 767px) {
    width: 100%;

  }

`;

const SectionFooterBottom = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${({theme}) => theme.ColorTitle };
`;

export function Footer() {
  return (
    <footer>
    <SectionFooterTop>
      <SectionFooterLogo>
        <Icon color="#628FD9"  width="3rem" icon="icon-park:game" />
        <a href="/">
          <h1>Loja<span>Games</span></h1>
        </a>
      </SectionFooterLogo>
      
    </SectionFooterTop>
    <SectionFooterBottom>
      <p>Trabalho React/NextJS - Aluno:  Vinicius Campos  Romariz</p>
    </SectionFooterBottom>
  </footer>
  )
}
