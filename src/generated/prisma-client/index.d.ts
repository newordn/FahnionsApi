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
  profil: (where?: ProfilWhereInput) => Promise<boolean>;
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

  profil: (where: ProfilWhereUniqueInput) => ProfilNullablePromise;
  profils: (args?: {
    where?: ProfilWhereInput;
    orderBy?: ProfilOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Profil>;
  profilsConnection: (args?: {
    where?: ProfilWhereInput;
    orderBy?: ProfilOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProfilConnectionPromise;
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

  createProfil: (data: ProfilCreateInput) => ProfilPromise;
  updateProfil: (args: {
    data: ProfilUpdateInput;
    where: ProfilWhereUniqueInput;
  }) => ProfilPromise;
  updateManyProfils: (args: {
    data: ProfilUpdateManyMutationInput;
    where?: ProfilWhereInput;
  }) => BatchPayloadPromise;
  upsertProfil: (args: {
    where: ProfilWhereUniqueInput;
    create: ProfilCreateInput;
    update: ProfilUpdateInput;
  }) => ProfilPromise;
  deleteProfil: (where: ProfilWhereUniqueInput) => ProfilPromise;
  deleteManyProfils: (where?: ProfilWhereInput) => BatchPayloadPromise;
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
  profil: (
    where?: ProfilSubscriptionWhereInput
  ) => ProfilSubscriptionPayloadSubscription;
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

export type ProfilOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "pays_ASC"
  | "pays_DESC"
  | "ville_ASC"
  | "ville_DESC"
  | "quartier_ASC"
  | "quartier_DESC"
  | "email_ASC"
  | "email_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "password_ASC"
  | "password_DESC"
  | "avatar_ASC"
  | "avatar_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type PubOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "enterprise_ASC"
  | "enterprise_DESC"
  | "enterpriseDescription_ASC"
  | "enterpriseDescription_DESC"
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

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

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

export interface PubUpdateManyMutationInput {
  enterprise?: Maybe<String>;
  enterpriseDescription?: Maybe<String>;
  title?: Maybe<String>;
  description?: Maybe<String>;
  medias?: Maybe<PubUpdatemediasInput>;
  contact?: Maybe<String>;
  status?: Maybe<Boolean>;
}

export type ProfilWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PubUpdatemediasInput {
  set?: Maybe<String[] | String>;
}

export interface ProfilSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProfilWhereInput>;
  AND?: Maybe<ProfilSubscriptionWhereInput[] | ProfilSubscriptionWhereInput>;
  OR?: Maybe<ProfilSubscriptionWhereInput[] | ProfilSubscriptionWhereInput>;
  NOT?: Maybe<ProfilSubscriptionWhereInput[] | ProfilSubscriptionWhereInput>;
}

export interface PubUpdateInput {
  enterprise?: Maybe<String>;
  enterpriseDescription?: Maybe<String>;
  title?: Maybe<String>;
  description?: Maybe<String>;
  medias?: Maybe<PubUpdatemediasInput>;
  contact?: Maybe<String>;
  status?: Maybe<Boolean>;
}

export interface TshirtUpdateimagesInput {
  set?: Maybe<String[] | String>;
}

export interface PubCreatemediasInput {
  set?: Maybe<String[] | String>;
}

export interface TshirtCreateimagesInput {
  set?: Maybe<String[] | String>;
}

export type TshirtWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type PubWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PubCreateInput {
  id?: Maybe<ID_Input>;
  enterprise: String;
  enterpriseDescription: String;
  title: String;
  description: String;
  medias?: Maybe<PubCreatemediasInput>;
  contact?: Maybe<String>;
  status: Boolean;
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
  enterprise?: Maybe<String>;
  enterprise_not?: Maybe<String>;
  enterprise_in?: Maybe<String[] | String>;
  enterprise_not_in?: Maybe<String[] | String>;
  enterprise_lt?: Maybe<String>;
  enterprise_lte?: Maybe<String>;
  enterprise_gt?: Maybe<String>;
  enterprise_gte?: Maybe<String>;
  enterprise_contains?: Maybe<String>;
  enterprise_not_contains?: Maybe<String>;
  enterprise_starts_with?: Maybe<String>;
  enterprise_not_starts_with?: Maybe<String>;
  enterprise_ends_with?: Maybe<String>;
  enterprise_not_ends_with?: Maybe<String>;
  enterpriseDescription?: Maybe<String>;
  enterpriseDescription_not?: Maybe<String>;
  enterpriseDescription_in?: Maybe<String[] | String>;
  enterpriseDescription_not_in?: Maybe<String[] | String>;
  enterpriseDescription_lt?: Maybe<String>;
  enterpriseDescription_lte?: Maybe<String>;
  enterpriseDescription_gt?: Maybe<String>;
  enterpriseDescription_gte?: Maybe<String>;
  enterpriseDescription_contains?: Maybe<String>;
  enterpriseDescription_not_contains?: Maybe<String>;
  enterpriseDescription_starts_with?: Maybe<String>;
  enterpriseDescription_not_starts_with?: Maybe<String>;
  enterpriseDescription_ends_with?: Maybe<String>;
  enterpriseDescription_not_ends_with?: Maybe<String>;
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

export interface TshirtUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  price?: Maybe<String>;
  images?: Maybe<TshirtUpdateimagesInput>;
  contact?: Maybe<String>;
}

export interface ProfilCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  pays: String;
  ville: String;
  quartier: String;
  email?: Maybe<String>;
  phone: String;
  password: String;
  avatar: String;
}

export interface ProfilUpdateInput {
  name?: Maybe<String>;
  pays?: Maybe<String>;
  ville?: Maybe<String>;
  quartier?: Maybe<String>;
  email?: Maybe<String>;
  phone?: Maybe<String>;
  password?: Maybe<String>;
  avatar?: Maybe<String>;
}

export interface ProfilUpdateManyMutationInput {
  name?: Maybe<String>;
  pays?: Maybe<String>;
  ville?: Maybe<String>;
  quartier?: Maybe<String>;
  email?: Maybe<String>;
  phone?: Maybe<String>;
  password?: Maybe<String>;
  avatar?: Maybe<String>;
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

export interface TshirtUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  price?: Maybe<String>;
  images?: Maybe<TshirtUpdateimagesInput>;
  contact?: Maybe<String>;
}

export interface ProfilWhereInput {
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
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  pays?: Maybe<String>;
  pays_not?: Maybe<String>;
  pays_in?: Maybe<String[] | String>;
  pays_not_in?: Maybe<String[] | String>;
  pays_lt?: Maybe<String>;
  pays_lte?: Maybe<String>;
  pays_gt?: Maybe<String>;
  pays_gte?: Maybe<String>;
  pays_contains?: Maybe<String>;
  pays_not_contains?: Maybe<String>;
  pays_starts_with?: Maybe<String>;
  pays_not_starts_with?: Maybe<String>;
  pays_ends_with?: Maybe<String>;
  pays_not_ends_with?: Maybe<String>;
  ville?: Maybe<String>;
  ville_not?: Maybe<String>;
  ville_in?: Maybe<String[] | String>;
  ville_not_in?: Maybe<String[] | String>;
  ville_lt?: Maybe<String>;
  ville_lte?: Maybe<String>;
  ville_gt?: Maybe<String>;
  ville_gte?: Maybe<String>;
  ville_contains?: Maybe<String>;
  ville_not_contains?: Maybe<String>;
  ville_starts_with?: Maybe<String>;
  ville_not_starts_with?: Maybe<String>;
  ville_ends_with?: Maybe<String>;
  ville_not_ends_with?: Maybe<String>;
  quartier?: Maybe<String>;
  quartier_not?: Maybe<String>;
  quartier_in?: Maybe<String[] | String>;
  quartier_not_in?: Maybe<String[] | String>;
  quartier_lt?: Maybe<String>;
  quartier_lte?: Maybe<String>;
  quartier_gt?: Maybe<String>;
  quartier_gte?: Maybe<String>;
  quartier_contains?: Maybe<String>;
  quartier_not_contains?: Maybe<String>;
  quartier_starts_with?: Maybe<String>;
  quartier_not_starts_with?: Maybe<String>;
  quartier_ends_with?: Maybe<String>;
  quartier_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  phone?: Maybe<String>;
  phone_not?: Maybe<String>;
  phone_in?: Maybe<String[] | String>;
  phone_not_in?: Maybe<String[] | String>;
  phone_lt?: Maybe<String>;
  phone_lte?: Maybe<String>;
  phone_gt?: Maybe<String>;
  phone_gte?: Maybe<String>;
  phone_contains?: Maybe<String>;
  phone_not_contains?: Maybe<String>;
  phone_starts_with?: Maybe<String>;
  phone_not_starts_with?: Maybe<String>;
  phone_ends_with?: Maybe<String>;
  phone_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  avatar?: Maybe<String>;
  avatar_not?: Maybe<String>;
  avatar_in?: Maybe<String[] | String>;
  avatar_not_in?: Maybe<String[] | String>;
  avatar_lt?: Maybe<String>;
  avatar_lte?: Maybe<String>;
  avatar_gt?: Maybe<String>;
  avatar_gte?: Maybe<String>;
  avatar_contains?: Maybe<String>;
  avatar_not_contains?: Maybe<String>;
  avatar_starts_with?: Maybe<String>;
  avatar_not_starts_with?: Maybe<String>;
  avatar_ends_with?: Maybe<String>;
  avatar_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ProfilWhereInput[] | ProfilWhereInput>;
  OR?: Maybe<ProfilWhereInput[] | ProfilWhereInput>;
  NOT?: Maybe<ProfilWhereInput[] | ProfilWhereInput>;
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

export interface TshirtCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  description: String;
  price: String;
  images?: Maybe<TshirtCreateimagesInput>;
  contact: String;
}

export interface NodeNode {
  id: ID_Output;
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

export interface AggregateProfil {
  count: Int;
}

export interface AggregateProfilPromise
  extends Promise<AggregateProfil>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProfilSubscription
  extends Promise<AsyncIterator<AggregateProfil>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
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

export interface ProfilEdge {
  node: Profil;
  cursor: String;
}

export interface ProfilEdgePromise extends Promise<ProfilEdge>, Fragmentable {
  node: <T = ProfilPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProfilEdgeSubscription
  extends Promise<AsyncIterator<ProfilEdge>>,
    Fragmentable {
  node: <T = ProfilSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
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

export interface ProfilConnection {
  pageInfo: PageInfo;
  edges: ProfilEdge[];
}

export interface ProfilConnectionPromise
  extends Promise<ProfilConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProfilEdge>>() => T;
  aggregate: <T = AggregateProfilPromise>() => T;
}

export interface ProfilConnectionSubscription
  extends Promise<AsyncIterator<ProfilConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProfilEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProfilSubscription>() => T;
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

export interface Pub {
  id: ID_Output;
  enterprise: String;
  enterpriseDescription: String;
  title: String;
  description: String;
  createdAt: DateTimeOutput;
  medias: String[];
  contact?: String;
  status: Boolean;
}

export interface PubPromise extends Promise<Pub>, Fragmentable {
  id: () => Promise<ID_Output>;
  enterprise: () => Promise<String>;
  enterpriseDescription: () => Promise<String>;
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
  enterprise: () => Promise<AsyncIterator<String>>;
  enterpriseDescription: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  medias: () => Promise<AsyncIterator<String[]>>;
  contact: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<Boolean>>;
}

export interface PubNullablePromise extends Promise<Pub | null>, Fragmentable {
  id: () => Promise<ID_Output>;
  enterprise: () => Promise<String>;
  enterpriseDescription: () => Promise<String>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  medias: () => Promise<String[]>;
  contact: () => Promise<String>;
  status: () => Promise<Boolean>;
}

export interface ProfilPreviousValues {
  id: ID_Output;
  name: String;
  pays: String;
  ville: String;
  quartier: String;
  email?: String;
  phone: String;
  password: String;
  avatar: String;
  createdAt: DateTimeOutput;
}

export interface ProfilPreviousValuesPromise
  extends Promise<ProfilPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  pays: () => Promise<String>;
  ville: () => Promise<String>;
  quartier: () => Promise<String>;
  email: () => Promise<String>;
  phone: () => Promise<String>;
  password: () => Promise<String>;
  avatar: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ProfilPreviousValuesSubscription
  extends Promise<AsyncIterator<ProfilPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  pays: () => Promise<AsyncIterator<String>>;
  ville: () => Promise<AsyncIterator<String>>;
  quartier: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ProfilSubscriptionPayload {
  mutation: MutationType;
  node: Profil;
  updatedFields: String[];
  previousValues: ProfilPreviousValues;
}

export interface ProfilSubscriptionPayloadPromise
  extends Promise<ProfilSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProfilPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProfilPreviousValuesPromise>() => T;
}

export interface ProfilSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProfilSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProfilSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProfilPreviousValuesSubscription>() => T;
}

export interface PubPreviousValues {
  id: ID_Output;
  enterprise: String;
  enterpriseDescription: String;
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
  enterprise: () => Promise<String>;
  enterpriseDescription: () => Promise<String>;
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
  enterprise: () => Promise<AsyncIterator<String>>;
  enterpriseDescription: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  medias: () => Promise<AsyncIterator<String[]>>;
  contact: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<Boolean>>;
}

export interface Profil {
  id: ID_Output;
  name: String;
  pays: String;
  ville: String;
  quartier: String;
  email?: String;
  phone: String;
  password: String;
  avatar: String;
  createdAt: DateTimeOutput;
}

export interface ProfilPromise extends Promise<Profil>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  pays: () => Promise<String>;
  ville: () => Promise<String>;
  quartier: () => Promise<String>;
  email: () => Promise<String>;
  phone: () => Promise<String>;
  password: () => Promise<String>;
  avatar: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ProfilSubscription
  extends Promise<AsyncIterator<Profil>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  pays: () => Promise<AsyncIterator<String>>;
  ville: () => Promise<AsyncIterator<String>>;
  quartier: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ProfilNullablePromise
  extends Promise<Profil | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  pays: () => Promise<String>;
  ville: () => Promise<String>;
  quartier: () => Promise<String>;
  email: () => Promise<String>;
  phone: () => Promise<String>;
  password: () => Promise<String>;
  avatar: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
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

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

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
  },
  {
    name: "Profil",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
