// by neword
const {GraphQLServer} = require('graphql-yoga')
const express = require('express')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const {prisma} = require('./generated/prisma-client')
const {storeUpload} = require('./helpers/upload')
const {GraphQLUpload} = require('graphql-upload')
const {typeDefs} = require('./schema.graphql.js')
const {makeExecutableSchema} = require('graphql-tools')
const Tshirt = require('./resolvers/Tshirt')
const resolvers = {
    Query,
    Mutation,
    Tshirt,
    Upload: GraphQLUpload
}
const schema = makeExecutableSchema({typeDefs,resolvers})
const server = new GraphQLServer({
    schema,
    context: request=> ({...request,prisma,storeUpload})
    
})
server.start(()=>console.log(`Polytech Campus GraphQl Server Started, is running on http://localhost:4000`))