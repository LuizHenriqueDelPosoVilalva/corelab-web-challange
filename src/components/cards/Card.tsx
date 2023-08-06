import axios from 'axios'
import { useState } from 'react'
import { useSWRConfig } from 'swr'

import { ContentCard, StyleContent, StyleButton, ContainerButtonsCards } from './StyleCard'
import { ICardProps } from '../../interface/postInterface'
import EditPost from './EditPost'

import Menu from '../menus/Menu'

const Card: React.FC<ICardProps> = ({title, task, id}) => {
  const { mutate } = useSWRConfig()
  const [editPost, setEditPost] = useState(false)

  const handleEdit = () => {
   setEditPost(true)
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post?id=${id}`)
      if (response.status === 200)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post?limit=6`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ContentCard>
      <StyleContent>
        <h1>{!editPost && title}</h1>
        <h1>{editPost && <EditPost />}</h1>
        <p>{!editPost && task}</p>
        <p>{editPost && !task}</p>
      </StyleContent>
      <ContainerButtonsCards>
        <StyleButton>
          <Menu
            options={[
              {
                src: '/icons/delete.svg',
                alt: 'iconDelete',
                onClick: handleDelete
              },
              {
                src: '/icons/edit.svg',
                alt: 'iconEdit',
                onClick: handleEdit
              }
            ]}
          />
        </StyleButton>
      </ContainerButtonsCards>
    </ContentCard>
  )
}

export default Card