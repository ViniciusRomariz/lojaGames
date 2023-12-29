import { Icon } from '@iconify/react';
import { SearchBar } from '../SearchBar';
import styled from 'styled-components';
import Modal from 'react-modal';
import React, { useState } from 'react';
import { StyledButton } from '../Button';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background: ${({theme}) => theme.mainStyles.backgroundBody || "#fff"};
  position: fixed;
  width: 100%;
  top: 0;
 /*  z-index: 1000; */

  h1 {
    margin-left: 0.5rem;
    color: ${({theme}) => theme.ColorTitle};
  }

  span {
    color: var(--cor-1);
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 360px) and (max-width: 767px) {
      flex-direction: column;
    }
  }

`;

const SectionLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 0.5rem;
    flex-direction: column;
  }

`;

Modal.setAppElement('#root');  // Onde '#root' é o ID do elemento raiz da sua aplicação

export function Header({ valorFiltro, setValorFiltro }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(null);

  const handleLogin = async (e) => {
     e.preventDefault();
    signInWithEmailAndPassword(auth, email, senha)
        .then(async (credenciais) => {
            setUsuario((objetoAtual) => {
                const retorno = {
                    ...objetoAtual, 
                    ["id"]:credenciais.user.uid,  
                    ["email"]:credenciais.user.email
                };
                setIsLoginSuccessful(true);
                return retorno;
            });
        })
        .catch((error) => {
          setIsLoginSuccessful(false);
          console.log(`${error.code} = ${error.message}`);
          setErro("Login Inválido");
        });
        closeModal();
  };

  const closeModal = () => {
    setIsLoginSuccessful(null);
    setIsModalOpen(false);
    // Limpar os campos do formulário ao fechar o modal
    setEmail('');
    setSenha('');
    
  };

  return (
    <StyledHeader>
      <SectionLogo>
        <Icon color="#628FD9" width="3rem" icon="icon-park:game" />
        <a href="./index.html">
          <h1>Loja<span>Games</span></h1>
        </a>
      </SectionLogo>
      <SearchBar valorFiltro={valorFiltro} setValorFiltro={setValorFiltro} />
      <div>
        
        <StyledButton secondary onClick={() => setIsModalOpen(true)}>{ isLoginSuccessful ? 'Logout' : 'Login' }</StyledButton> 
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Login Modal"
        >
          <button onClick={closeModal}>close</button>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit">Login</button>
            <div style={isLoginSuccessful ? { display:'block' } : { display:'none' }}>
             {isLoginSuccessful ? <p>Login bem-sucedido!</p> : <p>Login não sucedido!</p>}
            </div>
          </form>
        </Modal>
      </div>
    </StyledHeader>
  );
}



/* export function Header({valorFiltro, setValorFiltro}) {
  return (
      <StyledHeader>
        <SectionLogo>
          <Icon color="#628FD9"  width="3rem" icon="icon-park:game" />
          <a href="./index.html">
            <h1>Loja<span>Games</span></h1>
          </a>
        </SectionLogo>
        <SearchBar valorFiltro={valorFiltro} setValorFiltro={setValorFiltro} />
        <div>
         <StyledButton secondary  href="#">Login</StyledButton>
        </div>
      </StyledHeader>
  )
} */
