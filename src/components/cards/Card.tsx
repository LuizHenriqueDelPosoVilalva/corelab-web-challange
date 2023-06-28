import { ContentCard } from './StyleCard'

interface ICardProps {
  children: React.ReactNode;
}

const Card:React.FC<ICardProps> = ({children}) => {
  return (
    <ContentCard>
      {children}
    </ContentCard>
  )
}

export default Card