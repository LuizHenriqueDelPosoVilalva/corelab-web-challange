import { useState, useRef, ChangeEvent, KeyboardEvent } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { joiResolver } from '@hookform/resolvers/joi'

import { createPostSchema } from '../../modules/post.schema'

import { IEditPost } from '../../interface/postInterface'

import { ContentEditPost } from './StyleCard'


const EditPost:React.FC<IEditPost> = ({ id, titulo, tarefa, onSave }) => {

  const { handleSubmit }= useForm({
    resolver: joiResolver(createPostSchema),
    mode: 'all'
  })

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
          try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/post?id=${id}title=${titulo}task=${tarefa}`)

            if (response.status === 200){
              onSave()
            }
            // Limpa os campos de entrada
            setTitle('')
            setTask('')

            // Chama a função mutate para atualizar os dados em cache
            //mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post?limit=6`)

            // Mover o foco de volta para o <input>
            titleRef.current?.focus();
          } catch (err) {
            console.error(err)
          }
        }
      }
    }
  }

  return (
    <ContentEditPost>
      <form onSubmit={handleSubmit(handleKeyPress)}>
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
    </ContentEditPost>
  )
}

export default EditPost