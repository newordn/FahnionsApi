const {GraphQLUpload} = require('graphql-upload')
const typeDefs = `
scalar Upload
type Query{
    info: String!
    tshirts: [Tshirt!]!
    pubs: [Pub!]!
    profils: [Profil!]!
    shops: [Shop!]!
    articlesByShop(shopId: ID!): [Article!]!
}
type Subscription{
    newTshirt:Tshirt
    newPub: Pub
}
type Mutation{
    shop(name: String!,description: String!,pays: String!,ville: String!,localisation: String!,contact: String!,affiche: Upload!,password:String!): Shop
    article(name:String!,description: String!,price: String!,shop: ID!,images: [Upload!]!):Article
    profil(name:String!,description:String!,pays:String!,ville:String!,quartier:String!,email:String,phone:String!,password:String!,avatar:Upload):Profil
    profilConnexion(phone:String!,password:String!): Profil  
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
    description: String!
    pays: String!
    ville: String!
    quartier: String!
    email: String
    phone: String!
    password: String!
    avatar: String!
    createdAt: String!
}
type Shop{
    id: ID! 
    name: String!
    description: String!
    pays: String!
    ville: String!
    localisation: String!
    contact: String!
    affiche: String!
    articles: [Article]
    password: String!
    createdAt: String!
}
type Article {
    id: ID!
    name: String!
    description: String!
    price: String!
    shop: Shop
    images: [String!]!
    createdAt: String!
}
`
module.exports ={
    typeDefs
}
