"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var prisma = require("prisma");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
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
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/neword-2bedf8/FahnionsApi/dev`
});
exports.prisma = new exports.Prisma();
