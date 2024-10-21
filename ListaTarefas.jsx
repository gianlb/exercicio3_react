import React, { useState } from 'react';

function ListaTarefas() {

  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React' },
    { id: 2, titulo: 'Fazer exercícios' },
    { id: 3, titulo: 'Ler um livro' }
  ]);

  const removerTarefa = (id) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.titulo} 
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;
