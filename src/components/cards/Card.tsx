import { ContentCard } from './StyleCard'

interface CardProps {
  children: React.ReactNode;
}

const Card:React.FC<CardProps> = ({children}) => {
  return (
    <ContentCard>
      {children}
    </ContentCard>
  )
}

export default Card