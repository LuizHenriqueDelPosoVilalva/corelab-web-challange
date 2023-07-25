import { useState, useRef, ChangeEvent, KeyboardEvent } from 'react'
import axios from 'axios'
import useSWR, { mutate } from 'swr'

import { IMapPost } from '../interface/postInterface'

import { Main, GetPosts, Taks } from './indexStyle'

import Navbar from '../components/nav/Navbar';
import CreatePost from '../components/createPost/CreatePost';
import Card from '../components/cards/Card';

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function Paginainicial() {
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('')
  const titleRef = useRef<HTMLInputElement>(null)
  const taskRef = useRef<HTMLTextAreaElement>(null)

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  };

  const handleTaskChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTask(event.target.value)
  };

  const handleKeyPress = async (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Previne o comportamento padrão de adicionar uma nova linha

      if (event.target instanceof HTMLInputElement) {
        // Move o foco para o <textarea>
        taskRef.current?.focus();
      } else {
        if (task.trim() !== '') {
          // Aqui eu envio os dados para o banco de dados
          // usando as variáveis "title" e "task"
          const data = {
            title: title,
            task: task
          }
          try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, data)
            // Limpa os campos de entrada
            setTitle('')
            setTask('')

            // Chama a função mutate para atualizar os dados em cache
            mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post?limit=6`)

            // Mover o foco de volta para o <input>
            titleRef.current?.focus();
          } catch (err) {
            console.error(err)
          }
        }
      }
    }
  }
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/post?limit=6`, fetcher)

  console.log(data)

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
            ref={titleRef}
            maxLength={20}
          />
          <textarea
            name="task"
            ref={taskRef}
            value={task}
            onChange={handleTaskChange}
            onKeyDown={handleKeyPress}
            maxLength={200}
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
            {data?.map((post: IMapPost) => (
              <Card
                key={post._id}
                title={post.title}
                task={post.task}
                id={post._id} 
              />
            ))}
          </GetPosts>
        </Taks>
      </Main>
    </>
  )
}
