import { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';

import { Main, GetPosts, Taks } from './indexStyle';

import Navbar from '../components/nav/Navbar';
import CreatePost from '../components/createPost/CreatePost';
import Card from '../components/cards/Card';

export default function Paginainicial() {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const taskRef = useRef<HTMLTextAreaElement>(null);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTask(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Previne o comportamento padrão de adicionar uma nova linha

      if (event.target instanceof HTMLInputElement) {
        // Move o foco para o <textarea>
        taskRef.current?.focus();
      } else {
        if (task.trim() !== '') {
          console.log('Title:', title);
          console.log('Task:', task);
          // Aqui você pode enviar os dados para o banco de dados
          // usando as variáveis "title" e "task"

          // Limpa os campos de entrada
          setTitle('');
          setTask('');
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <CreatePost>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={title}
            onChange={handleTitleChange}
            onKeyDown={handleKeyPress}
          />
          <textarea
            name="task"
            ref={taskRef}
            value={task}
            onChange={handleTaskChange}
            onKeyDown={handleKeyPress}
          />
        </form>
      </CreatePost>
      <Main>
        <Taks>
          <h4>Favoritos</h4>
        </Taks>
        <Taks>
          <h4>Outros</h4>
          <GetPosts>
            <Card>opa</Card>
            <Card>opa</Card>
            <Card>opa</Card>
          </GetPosts>
        </Taks>
      </Main>
    </>
  );
}
