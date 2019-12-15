// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  pub: (where?: PubWhereInput) => Promise<boolean>;
  tshirt: (where?: TshirtWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  pub: (where: PubWhereUniqueInput) => PubNullablePromise;
  pubs: (args?: {
    where?: PubWhereInput;
    orderBy?: PubOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Pub>;
  pubsConnection: (args?: {
    where?: PubWhereInput;
    orderBy?: PubOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PubConnectionPromise;
  tshirt: (where: TshirtWhereUniqueInput) => TshirtNullablePromise;
  tshirts: (args?: {
    where?: TshirtWhereInput;
    orderBy?: TshirtOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Tshirt>;
  tshirtsConnection: (args?: {
    where?: TshirtWhereInput;
    orderBy?: TshirtOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TshirtConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPub: (data: PubCreateInput) => PubPromise;
  updatePub: (args: {
    data: PubUpdateInput;
    where: PubWhereUniqueInput;
  }) => PubPromise;
  updateManyPubs: (args: {
    data: PubUpdateManyMutationInput;
    where?: PubWhereInput;
  }) => BatchPayloadPromise;
  upsertPub: (args: {
    where: PubWhereUniqueInput;
    create: PubCreateInput;
    update: PubUpdateInput;
  }) => PubPromise;
  deletePub: (where: PubWhereUniqueInput) => PubPromise;
  deleteManyPubs: (where?: PubWhereInput) => BatchPayloadPromise;
  createTshirt: (data: TshirtCreateInput) => TshirtPromise;
  updateTshirt: (args: {
    data: TshirtUpdateInput;
    where: TshirtWhereUniqueInput;
  }) => TshirtPromise;
  updateManyTshirts: (args: {
    data: TshirtUpdateManyMutationInput;
    where?: TshirtWhereInput;
  }) => BatchPayloadPromise;
  upsertTshirt: (args: {
    where: TshirtWhereUniqueInput;
    create: TshirtCreateInput;
    update: TshirtUpdateInput;
  }) => TshirtPromise;
  deleteTshirt: (where: TshirtWhereUniqueInput) => TshirtPromise;
  deleteManyTshirts: (where?: TshirtWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  pub: (
    where?: PubSubscriptionWhereInput
  ) => PubSubscriptionPayloadSubscription;
  tshirt: (
    where?: TshirtSubscriptionWhereInput
  ) => TshirtSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PubOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "contact_ASC"
  | "contact_DESC"
  | "status_ASC"
  | "status_DESC";

export type TshirtOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "price_ASC"
  | "price_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "contact_ASC"
  | "contact_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TshirtCreateimagesInput {
  set?: Maybe<String[] | String>;
}

export interface PubCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  description: String;
  medias?: Maybe<PubCreatemediasInput>;
  contact?: Maybe<String>;
  status: Boolean;
}

export type TshirtWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type PubWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PubUpdatemediasInput {
  set?: Maybe<String[] | String>;
}

export interface PubWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  contact?: Maybe<String>;
  contact_not?: Maybe<String>;
  contact_in?: Maybe<String[] | String>;
  contact_not_in?: Maybe<String[] | String>;
  contact_lt?: Maybe<String>;
  contact_lte?: Maybe<String>;
  contact_gt?: Maybe<String>;
  contact_gte?: Maybe<String>;
  contact_contains?: Maybe<String>;
  contact_not_contains?: Maybe<String>;
  contact_starts_with?: Maybe<String>;
  contact_not_starts_with?: Maybe<String>;
  contact_ends_with?: Maybe<String>;
  contact_not_ends_with?: Maybe<String>;
  status?: Maybe<Boolean>;
  status_not?: Maybe<Boolean>;
  AND?: Maybe<PubWhereInput[] | PubWhereInput>;
  OR?: Maybe<PubWhereInput[] | PubWhereInput>;
  NOT?: Maybe<PubWhereInput[] | PubWhereInput>;
}

export interface TshirtUpdateimagesInput {
  set?: Maybe<String[] | String>;
}

export interface PubCreatemediasInput {
  set?: Maybe<String[] | String>;
}

export interface PubUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  medias?: Maybe<PubUpdatemediasInput>;
  contact?: Maybe<String>;
  status?: Maybe<Boolean>;
}

export interface PubSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PubWhereInput>;
  AND?: Maybe<PubSubscriptionWhereInput[] | PubSubscriptionWhereInput>;
  OR?: Maybe<PubSubscriptionWhereInput[] | PubSubscriptionWhereInput>;
  NOT?: Maybe<PubSubscriptionWhereInput[] | PubSubscriptionWhereInput>;
}

export interface TshirtWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  price?: Maybe<String>;
  price_not?: Maybe<String>;
  price_in?: Maybe<String[] | String>;
  price_not_in?: Maybe<String[] | String>;
  price_lt?: Maybe<String>;
  price_lte?: Maybe<String>;
  price_gt?: Maybe<String>;
  price_gte?: Maybe<String>;
  price_contains?: Maybe<String>;
  price_not_contains?: Maybe<String>;
  price_starts_with?: Maybe<String>;
  price_not_starts_with?: Maybe<String>;
  price_ends_with?: Maybe<String>;
  price_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  contact?: Maybe<String>;
  contact_not?: Maybe<String>;
  contact_in?: Maybe<String[] | String>;
  contact_not_in?: Maybe<String[] | String>;
  contact_lt?: Maybe<String>;
  contact_lte?: Maybe<String>;
  contact_gt?: Maybe<String>;
  contact_gte?: Maybe<String>;
  contact_contains?: Maybe<String>;
  contact_not_contains?: Maybe<String>;
  contact_starts_with?: Maybe<String>;
  contact_not_starts_with?: Maybe<String>;
  contact_ends_with?: Maybe<String>;
  contact_not_ends_with?: Maybe<String>;
  AND?: Maybe<TshirtWhereInput[] | TshirtWhereInput>;
  OR?: Maybe<TshirtWhereInput[] | TshirtWhereInput>;
  NOT?: Maybe<TshirtWhereInput[] | TshirtWhereInput>;
}

export interface TshirtUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  price?: Maybe<String>;
  images?: Maybe<TshirtUpdateimagesInput>;
  contact?: Maybe<String>;
}

export interface TshirtUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  price?: Maybe<String>;
  images?: Maybe<TshirtUpdateimagesInput>;
  contact?: Maybe<String>;
}

export interface PubUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  medias?: Maybe<PubUpdatemediasInput>;
  contact?: Maybe<String>;
  status?: Maybe<Boolean>;
}

export interface TshirtCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  description: String;
  price: String;
  images?: Maybe<TshirtCreateimagesInput>;
  contact: String;
}

export interface TshirtSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TshirtWhereInput>;
  AND?: Maybe<TshirtSubscriptionWhereInput[] | TshirtSubscriptionWhereInput>;
  OR?: Maybe<TshirtSubscriptionWhereInput[] | TshirtSubscriptionWhereInput>;
  NOT?: Maybe<TshirtSubscriptionWhereInput[] | TshirtSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface PubConnection {
  pageInfo: PageInfo;
  edges: PubEdge[];
}

export interface PubConnectionPromise
  extends Promise<PubConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PubEdge>>() => T;
  aggregate: <T = AggregatePubPromise>() => T;
}

export interface PubConnectionSubscription
  extends Promise<AsyncIterator<PubConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PubEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePubSubscription>() => T;
}

export interface TshirtPreviousValues {
  id: ID_Output;
  title: String;
  description: String;
  price: String;
  createdAt: DateTimeOutput;
  images: String[];
  contact: String;
}

export interface TshirtPreviousValuesPromise
  extends Promise<TshirtPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  price: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  images: () => Promise<String[]>;
  contact: () => Promise<String>;
}

export interface TshirtPreviousValuesSubscription
  extends Promise<AsyncIterator<TshirtPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  images: () => Promise<AsyncIterator<String[]>>;
  contact: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface PubSubscriptionPayload {
  mutation: MutationType;
  node: Pub;
  updatedFields: String[];
  previousValues: PubPreviousValues;
}

export interface PubSubscriptionPayloadPromise
  extends Promise<PubSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PubPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PubPreviousValuesPromise>() => T;
}

export interface PubSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PubSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PubSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PubPreviousValuesSubscription>() => T;
}

export interface TshirtEdge {
  node: Tshirt;
  cursor: String;
}

export interface TshirtEdgePromise extends Promise<TshirtEdge>, Fragmentable {
  node: <T = TshirtPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TshirtEdgeSubscription
  extends Promise<AsyncIterator<TshirtEdge>>,
    Fragmentable {
  node: <T = TshirtSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PubPreviousValues {
  id: ID_Output;
  title: String;
  description: String;
  createdAt: DateTimeOutput;
  medias: String[];
  contact?: String;
  status: Boolean;
}

export interface PubPreviousValuesPromise
  extends Promise<PubPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  medias: () => Promise<String[]>;
  contact: () => Promise<String>;
  status: () => Promise<Boolean>;
}

export interface PubPreviousValuesSubscription
  extends Promise<AsyncIterator<PubPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  medias: () => Promise<AsyncIterator<String[]>>;
  contact: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<Boolean>>;
}

export interface Pub {
  id: ID_Output;
  title: String;
  description: String;
  createdAt: DateTimeOutput;
  medias: String[];
  contact?: String;
  status: Boolean;
}

export interface PubPromise extends Promise<Pub>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  medias: () => Promise<String[]>;
  contact: () => Promise<String>;
  status: () => Promise<Boolean>;
}

export interface PubSubscription
  extends Promise<AsyncIterator<Pub>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  medias: () => Promise<AsyncIterator<String[]>>;
  contact: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<Boolean>>;
}

export interface PubNullablePromise extends Promise<Pub | null>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  medias: () => Promise<String[]>;
  contact: () => Promise<String>;
  status: () => Promise<Boolean>;
}

export interface TshirtConnection {
  pageInfo: PageInfo;
  edges: TshirtEdge[];
}

export interface TshirtConnectionPromise
  extends Promise<TshirtConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TshirtEdge>>() => T;
  aggregate: <T = AggregateTshirtPromise>() => T;
}

export interface TshirtConnectionSubscription
  extends Promise<AsyncIterator<TshirtConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TshirtEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTshirtSubscription>() => T;
}

export interface AggregateTshirt {
  count: Int;
}

export interface AggregateTshirtPromise
  extends Promise<AggregateTshirt>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTshirtSubscription
  extends Promise<AsyncIterator<AggregateTshirt>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Tshirt {
  id: ID_Output;
  title: String;
  description: String;
  price: String;
  createdAt: DateTimeOutput;
  images: String[];
  contact: String;
}

export interface TshirtPromise extends Promise<Tshirt>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  price: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  images: () => Promise<String[]>;
  contact: () => Promise<String>;
}

export interface TshirtSubscription
  extends Promise<AsyncIterator<Tshirt>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  images: () => Promise<AsyncIterator<String[]>>;
  contact: () => Promise<AsyncIterator<String>>;
}

export interface TshirtNullablePromise
  extends Promise<Tshirt | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  price: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  images: () => Promise<String[]>;
  contact: () => Promise<String>;
}

export interface PubEdge {
  node: Pub;
  cursor: String;
}

export interface PubEdgePromise extends Promise<PubEdge>, Fragmentable {
  node: <T = PubPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PubEdgeSubscription
  extends Promise<AsyncIterator<PubEdge>>,
    Fragmentable {
  node: <T = PubSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface TshirtSubscriptionPayload {
  mutation: MutationType;
  node: Tshirt;
  updatedFields: String[];
  previousValues: TshirtPreviousValues;
}

export interface TshirtSubscriptionPayloadPromise
  extends Promise<TshirtSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TshirtPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TshirtPreviousValuesPromise>() => T;
}

export interface TshirtSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TshirtSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TshirtSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TshirtPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregatePub {
  count: Int;
}

export interface AggregatePubPromise
  extends Promise<AggregatePub>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePubSubscription
  extends Promise<AsyncIterator<AggregatePub>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Tshirt",
    embedded: false
  },
  {
    name: "Pub",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
