const {GraphQLUpload} = require('graphql-upload')
const typeDefs = `
scalar Upload
type Query{
    info: String!
    tshirts: [Tshirt!]!
    pubs: [Pub!]!
    profils: [Profil!]!
}
type Subscription{
    newTshirt:Tshirt
    newPub: Pub
}
type Mutation{
    profil(name:String!,pays:String!,ville:String!,quartier:String!,email:String,phone:String!,password:String!,avatar:Upload!):Profil
    tshirt(title:String!,description:String!,price:String!,images:[Upload!]!,contact:String):Tshirt
    pub(enterprise:String!,enterpriseDescription:String!,title:String!,description:String!,medias:[Upload!]!,contact:String!):Pub
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
type Profil{
    id: ID! 
    name: String!
    pays: String!
    ville: String!
    quartier: String!
    email: String
    phone: String!
    password: String!
    avatar: String!
    createdAt: String!
}
`
module.exports ={
    typeDefs
}
