interface post {
  title: string,
  text: string
}

export const createPost: React.FC<post> = (body) => {
  console.log(body.title)
  console.log(body.text)
  return true
}

export const getPost = () => {
  console.log("GetPosts")
  return true
}