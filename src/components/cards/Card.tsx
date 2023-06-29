import { ContentCard } from './StyleCard'

interface ICardProps {
  title: string
  task: string
}

const Card: React.FC<ICardProps> = ({title, task}) => {
  return (
    <ContentCard>
      <h1>{title}</h1>
      <p>{task}</p>
    </ContentCard>
  )
}

export default Card