import { Icon } from '@iconify/react';
import styled from 'styled-components';
import Modal from 'react-modal';
import React, { useState } from 'react';
import { StyledButton } from '../Button';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';

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

Modal.setAppElement('#root');  

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
      <div>
        
        <StyledButton secondary onClick={() => setIsModalOpen(true)}>{ isLoginSuccessful ? 'Logout' : 'Login' }</StyledButton> 
        <Link href="/create-new-user">Novo aqui?</Link>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Login Modal"
        > 
          
          <div style={{ color: 'white', display: 'flex', flexDirection: 'column', marginLeft: '40%', marginBottom: '6rem' }}>
            <form onSubmit={handleLogin}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '20rem', marginBottom: '1rem' }}>
              <label for="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '20rem', marginBottom: '1rem' }}>
              <label for="senha">Senha</label>
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '20rem', height:'20rem', marginTop: '1rem' }}>
              <button type="submit">Login</button>
              <div style={isLoginSuccessful ? { display:'block' } : { display:'none' }}>
              {isLoginSuccessful ? <p>Login bem-sucedido!</p> : <p>Login não sucedido!</p>}
              </div>
            </div>
            </form>
            
          </div>
        </Modal>
      </div>
    </StyledHeader>
  );
}



