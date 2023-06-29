import React, { useState } from 'react'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import Image from 'next/image'

import { ContentCard, StyleTitle, StyleText, StyleButton, ContainerButtonsCards } from './StyleCard'
import { ICardProps } from '../../interface/postInterface'

const Card: React.FC<ICardProps> = ({title, task, id}) => {
  const { mutate } = useSWRConfig()
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      // Solicitação para excluir o componente do banco de dados
      const response= await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        data: {
          id: id
        }
      })
      console.log(response)
      if (response.status === 200)
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)

      setIsDeleted(true);
    } catch (error) {
      console.error('Erro ao excluir o componente:', error);
    }
  };

  if (isDeleted) {
    return null;
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
              <Image src="/icons/edit.svg" alt ="iconEdit" width={15} height={15} />
        </StyleButton>
        <StyleButton onClick={handleDelete}>
              <Image src="/icons/delete.svg" alt ="iconDelete" width={15} height={15}/>
        </StyleButton>
      </ContainerButtonsCards>
    </ContentCard>
  )
}

export default Card