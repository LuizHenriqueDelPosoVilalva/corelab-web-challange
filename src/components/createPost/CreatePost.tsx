import { ContainerCreatePost, ContentCreatePost } from './StyleCreatePost'

interface ICreatePost {
  children: React.ReactNode;
}

const CreatePost: React.FC<ICreatePost> = ({ children }) => {
  return (
    <ContainerCreatePost>
      <ContentCreatePost>
       {children}
      </ContentCreatePost>
    </ContainerCreatePost>
  )
}

export default CreatePost