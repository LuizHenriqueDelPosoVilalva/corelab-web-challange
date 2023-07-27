import axios from 'axios'
import { useState } from 'react'
import { useSWRConfig } from 'swr'

import { ContentCard, StyleTitle, StyleText, StyleButton, ContainerButtonsCards } from './StyleCard'
import { ICardProps } from '../../interface/postInterface'

import DeletePost from '../menus/DeletePost'
import EditPost from '../menus/EditPost'

const Card: React.FC<ICardProps> = ({title, task, id}) => {
  const { mutate } = useSWRConfig()
  const [editPost, setEditPost] = useState(false)

  const handleEdit = () => {
    console.log("EDIT")
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
      <StyleTitle>
        <h1>{title}</h1>
      </StyleTitle>
      <StyleText>
        <p>{task}</p>
      </StyleText>
      <ContainerButtonsCards>
        <StyleButton>
          <DeletePost
            options={[
              {
                onClick: handleDelete
              }
            ]}
          />
        </StyleButton>
        <StyleButton>
          <EditPost 
            options={[
              {
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