import axios from 'axios'
import { useState } from 'react'
import { useSWRConfig } from 'swr'

import { ContentCard, StyleTitle, StyleText, StyleButton, ContainerButtonsCards } from './StyleCard'
import { ICardProps } from '../../interface/postInterface'

import DeletePost from '../menus/Menu'
import Menu from '../menus/Menu'

const Card: React.FC<ICardProps> = ({title, task, id}) => {
  const { mutate } = useSWRConfig()

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
          <Menu
            options={[
              {
                src: '/icons/delete.svg',
                alt: 'iconDelete',
                width: 15,
                height: 15,
                onClick: handleDelete
              }
            ]}
          />
        </StyleButton>
      </ContainerButtonsCards>
    </ContentCard>
  )
}

export default Card