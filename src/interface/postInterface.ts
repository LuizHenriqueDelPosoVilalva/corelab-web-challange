export interface IPost {
  title: string,
  task: string,
  createdDate: Date,
}

export interface IDeletePost {
  title: string
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
  id: string;
}