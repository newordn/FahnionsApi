const {GraphQLUpload} = require('graphql-upload')
const typeDefs = `
scalar Upload
type Query{
    info: String!
    tshirts: [Tshirt!]!
}
type Mutation{
    tshirt(title:String!,description:String!,price:String!,images:[Upload!]!,contact:String):Tshirt
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
`
module.exports ={
    typeDefs
}
