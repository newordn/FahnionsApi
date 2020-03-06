const {GraphQLUpload} = require('graphql-upload')
const typeDefs = `
scalar Upload
type Query{
    info: String!
    tshirts: [Tshirt!]!
    pubs: [Pub!]!
}
type Subscription{
    newTshirt:Tshirt
    newPub: Pub
}
type Mutation{
    tshirt(title:String!,description:String!,price:String!,images:[Upload!]!,contact:String):Tshirt
    pub(enterprise:String!,enterpriseDescription:String!,title:String!,description:String!,medias:[Upload!]!,contact:String!):Pub
    profil(Nom_user:String!, ville_residence:String!,Quartier:String!,Email:String!,telephone:String!,password:String!): Profil
}
type Profil{
    id:ID!
    Nom_user:String!
    ville_residence:String!
    Quartier:String!
    Email:String!
    telephone:String!
    password:String!
  }
type Tshirt{
    id: ID!
    title: String!
    description: String!
    price: String!
    date: String!
    images: [String!]!
    contact: String!
}
type Pub{
    id:ID!
    enterprise:String!
    enterpriseDescription:String!
    title: String!
    description:String!
    date:String!
    medias: [String!]!
    contact: String
    status : Boolean!
}
`
module.exports ={
    typeDefs
}
