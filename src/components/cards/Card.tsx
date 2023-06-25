import React, { ReactNode } from 'react';

import { ContentCard } from './StyleCard'

interface CardProps {
  children: ReactNode
}

function Card ({children}: CardProps) {
  return (
    <ContentCard>
      {children}
    </ContentCard>
  )
}

export default Card