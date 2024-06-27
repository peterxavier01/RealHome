interface Address {
  state: string;
  city: string;
}

export interface User {
  id: string;
  name: string;
  image?: string;
  email: string;
  role: string;
  comments?: Comment[];
  posts?: Post[];
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  userId: string;
  publishedAt: string;
  post: Post;
  postId: string;
  replies: Comment[];
  parentId?: string;
  parent?: Comment;
}

export interface Author {
  id: string;
  name: string;
  image?: string;
  email: string;
  role: string;
}

interface PostCategory {
  categoryId: string;
  id: string;
  postId: string;
}

export interface Post {
  id: string;
  author: Author;
  authorId: string;
  comments: Comment[];
  content: string;
  description: string;
  image: string;
  lastUpdatedAt: string;
  permalink: string;
  postCategories: PostCategory[];
  publishedAt: string;
  title: string;
}

export interface Property {
  id: string;
  name: string;
  image: string;
  client: string;
  info: string;
  description: string;
  category: string;
  price: string;
  location: Address;
  relatedProperties: Property[];
  inverseRelation?: Property;
  inverseRelationId?: string;
  lastUpdated: string;
  size: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
}

export interface Agent {
  id: number;
  src: string;
  title: string;
  description: string;
  tel: string;
  email: string;
}
