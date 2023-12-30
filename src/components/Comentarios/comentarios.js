import React from 'react';

const Comentarios = () => {
  const comentarios = [
    {
      nomeUsuario: 'Joao123',
      email: 'joao123@email.com',
      comentario: 'Produto excelente! Estou muito satisfeito com a qualidade.',
    },
    {
      nomeUsuario: 'Maria456',
      email: 'maria456@email.com',
      comentario: 'Entrega rápida e o produto atendeu às minhas expectativas.',
    },
    {
      nomeUsuario: 'Carlos789',
      email: 'carlos789@email.com',
      comentario: 'Ótimo custo-benefício. Recomendo!',
    },
  ];

  return (
    <div>
      <h2 style={{ color: 'white' }}>Comentários sobre o Produto</h2>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>
            <strong style={{ color: 'white' }}>Nome do Usuário:</strong> <span style={{ color: 'white' }}>{comentario.nomeUsuario}<br /></span>
            <strong style={{ color: 'white' }}>Email:</strong> <span style={{ color: 'white' }}>{comentario.email}<br /></span>
            <strong style={{ color: 'white' }}>Comentário:</strong> <span style={{ color: 'white' }}>{comentario.comentario}</span>
            <hr style={{ borderColor: 'yellow' }}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comentarios;
