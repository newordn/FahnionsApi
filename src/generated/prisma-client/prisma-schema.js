module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregatePub {
  count: Int!
}

type AggregateTshirt {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createPub(data: PubCreateInput!): Pub!
  updatePub(data: PubUpdateInput!, where: PubWhereUniqueInput!): Pub
  updateManyPubs(data: PubUpdateManyMutationInput!, where: PubWhereInput): BatchPayload!
  upsertPub(where: PubWhereUniqueInput!, create: PubCreateInput!, update: PubUpdateInput!): Pub!
  deletePub(where: PubWhereUniqueInput!): Pub
  deleteManyPubs(where: PubWhereInput): BatchPayload!
  createTshirt(data: TshirtCreateInput!): Tshirt!
  updateTshirt(data: TshirtUpdateInput!, where: TshirtWhereUniqueInput!): Tshirt
  updateManyTshirts(data: TshirtUpdateManyMutationInput!, where: TshirtWhereInput): BatchPayload!
  upsertTshirt(where: TshirtWhereUniqueInput!, create: TshirtCreateInput!, update: TshirtUpdateInput!): Tshirt!
  deleteTshirt(where: TshirtWhereUniqueInput!): Tshirt
  deleteManyTshirts(where: TshirtWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Pub {
  id: ID!
  title: String!
  description: String!
  createdAt: DateTime!
  medias: [String!]!
  contact: String
  status: Boolean!
}

type PubConnection {
  pageInfo: PageInfo!
  edges: [PubEdge]!
  aggregate: AggregatePub!
}

input PubCreateInput {
  id: ID
  title: String!
  description: String!
  medias: PubCreatemediasInput
  contact: String
  status: Boolean!
}

input PubCreatemediasInput {
  set: [String!]
}

type PubEdge {
  node: Pub!
  cursor: String!
}

enum PubOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  contact_ASC
  contact_DESC
  status_ASC
  status_DESC
}

type PubPreviousValues {
  id: ID!
  title: String!
  description: String!
  createdAt: DateTime!
  medias: [String!]!
  contact: String
  status: Boolean!
}

type PubSubscriptionPayload {
  mutation: MutationType!
  node: Pub
  updatedFields: [String!]
  previousValues: PubPreviousValues
}

input PubSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PubWhereInput
  AND: [PubSubscriptionWhereInput!]
  OR: [PubSubscriptionWhereInput!]
  NOT: [PubSubscriptionWhereInput!]
}

input PubUpdateInput {
  title: String
  description: String
  medias: PubUpdatemediasInput
  contact: String
  status: Boolean
}

input PubUpdateManyMutationInput {
  title: String
  description: String
  medias: PubUpdatemediasInput
  contact: String
  status: Boolean
}

input PubUpdatemediasInput {
  set: [String!]
}

input PubWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  contact: String
  contact_not: String
  contact_in: [String!]
  contact_not_in: [String!]
  contact_lt: String
  contact_lte: String
  contact_gt: String
  contact_gte: String
  contact_contains: String
  contact_not_contains: String
  contact_starts_with: String
  contact_not_starts_with: String
  contact_ends_with: String
  contact_not_ends_with: String
  status: Boolean
  status_not: Boolean
  AND: [PubWhereInput!]
  OR: [PubWhereInput!]
  NOT: [PubWhereInput!]
}

input PubWhereUniqueInput {
  id: ID
}

type Query {
  pub(where: PubWhereUniqueInput!): Pub
  pubs(where: PubWhereInput, orderBy: PubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pub]!
  pubsConnection(where: PubWhereInput, orderBy: PubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PubConnection!
  tshirt(where: TshirtWhereUniqueInput!): Tshirt
  tshirts(where: TshirtWhereInput, orderBy: TshirtOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tshirt]!
  tshirtsConnection(where: TshirtWhereInput, orderBy: TshirtOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TshirtConnection!
  node(id: ID!): Node
}

type Subscription {
  pub(where: PubSubscriptionWhereInput): PubSubscriptionPayload
  tshirt(where: TshirtSubscriptionWhereInput): TshirtSubscriptionPayload
}

type Tshirt {
  id: ID!
  title: String!
  description: String!
  price: String!
  createdAt: DateTime!
  images: [String!]!
  contact: String!
}

type TshirtConnection {
  pageInfo: PageInfo!
  edges: [TshirtEdge]!
  aggregate: AggregateTshirt!
}

input TshirtCreateimagesInput {
  set: [String!]
}

input TshirtCreateInput {
  id: ID
  title: String!
  description: String!
  price: String!
  images: TshirtCreateimagesInput
  contact: String!
}

type TshirtEdge {
  node: Tshirt!
  cursor: String!
}

enum TshirtOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  contact_ASC
  contact_DESC
}

type TshirtPreviousValues {
  id: ID!
  title: String!
  description: String!
  price: String!
  createdAt: DateTime!
  images: [String!]!
  contact: String!
}

type TshirtSubscriptionPayload {
  mutation: MutationType!
  node: Tshirt
  updatedFields: [String!]
  previousValues: TshirtPreviousValues
}

input TshirtSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TshirtWhereInput
  AND: [TshirtSubscriptionWhereInput!]
  OR: [TshirtSubscriptionWhereInput!]
  NOT: [TshirtSubscriptionWhereInput!]
}

input TshirtUpdateimagesInput {
  set: [String!]
}

input TshirtUpdateInput {
  title: String
  description: String
  price: String
  images: TshirtUpdateimagesInput
  contact: String
}

input TshirtUpdateManyMutationInput {
  title: String
  description: String
  price: String
  images: TshirtUpdateimagesInput
  contact: String
}

input TshirtWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  contact: String
  contact_not: String
  contact_in: [String!]
  contact_not_in: [String!]
  contact_lt: String
  contact_lte: String
  contact_gt: String
  contact_gte: String
  contact_contains: String
  contact_not_contains: String
  contact_starts_with: String
  contact_not_starts_with: String
  contact_ends_with: String
  contact_not_ends_with: String
  AND: [TshirtWhereInput!]
  OR: [TshirtWhereInput!]
  NOT: [TshirtWhereInput!]
}

input TshirtWhereUniqueInput {
  id: ID
}
`
      }
    