'use client';

import { useState } from 'react';
import { Footer } from "../src/components/Footer";
import { auth } from '../src/components/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';

export default function CreateNewUser() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth, email, senha);
          console.log("Usuário criado com sucesso!");
          router.push('/');
        } catch (error) {
          console.error("Erro ao criar usuário: ", error.message);
        }
      };
    return (
        <>
            <form onSubmit={handleLogin}>
                <h3 style={{ color: 'white', margin: '10rem auto 2rem 40%' }}>Criar nova conta para a lojaGames</h3>
                <div style={{ color: 'white', display: 'flex', flexDirection: 'column', marginLeft: '40%', marginBottom: '6rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '20rem', marginBottom: '1rem' }}>
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" style={{ padding: '0.35rem' }} value={nome}
                                onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '20rem', marginBottom: '1rem' }}>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" style={{ padding: '0.35rem' }} value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '20rem', marginBottom: '1rem' }}>
                        <label for="senha">Senha</label>
                        <input type="password" id="senha" name="senha" style={{ padding: '0.35rem' }} value={senha}
                                onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '20rem', marginBottom: '1rem' }}>
                        <button type="submit" style={{ padding: '0.5rem'}}>Criar novo usuário</button>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
}