import { Main, GetPosts, Taks } from './indexStyle'

import Navbar from '../components/nav/Navbar'
import CreatePost from '../components/createPost/CreatePost'
import Card from '../components/cards/Card'

export default function Paginainicial () {
  return (
    <>
      <Navbar />
      <CreatePost />
      <Main>
        <Taks>
          <h4>Favoritos</h4>
        </Taks>
        <Taks>
          <h4>Outros</h4>
          <GetPosts>
            <Card>opa</Card>
            <Card>opa</Card>
            <Card>opa</Card>
          </GetPosts>
        </Taks>
      </Main>
    </> 
  )
}