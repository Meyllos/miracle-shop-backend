import { buildSchema } from "graphql";

// Schema
export let schema =buildSchema(`
  type Query {
    message: String
    getAllUsers:[Response]
    login(email:String!, password: String!): AuthData
    getItem(id: Int!): ViewOneItemResponse
    getAllItems:[ItemResponse]
  }

  type Mutation {
    signup(email:String!, firstname:String!,lastname:String!,password:String!): Response
    createItem(name: String!, image: String, price:Int!, quality: String!, quantity: Int!, barometer: String!, category: String!, moreDetails: String!): ItemResponse
  }

type Response{
  id:Int
  firstname:String
  lastname:String
  email:String
}

type AuthData{
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

type ItemResponse {
  id: Int
  name: String
  image: String
  price: Int
  quality: String,
  quantity: Int,
  barometer: String,
  category: String,
  moreDetails: String
}

type ViewOneItemResponse {
  name: String
  image: String
  price: Int
  quality: String,
  quantity: Int,
  barometer: String,
  category: String,
  moreDetails: String
}
`);
