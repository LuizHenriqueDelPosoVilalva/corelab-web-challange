import { ContainerCreatePost, ContentCreatePost } from './StyleCreatePost'

function CreatePost () {
  return (
    <ContainerCreatePost>
      <ContentCreatePost>
        <form>
          <input type="text" name="title" placeholder="Título"/>
          <textarea name="task"/>
        </form>
      </ContentCreatePost>
    </ContainerCreatePost>
  )
}

export default CreatePost