export interface IPost {
  title: string,
  task: string,
  createdDate: Date,
}

export interface IDeletePost {
  id: string
}

export interface IMapPost {
  _id: string,
  title: string,
  task: string,
  id: string,
}

export interface ICardProps {
  title: string,
  task: string,
  id: string,
}

export interface IEditPost {
  id: string,
  titulo: string,
  tarefa: string,
  onSave: any;
}