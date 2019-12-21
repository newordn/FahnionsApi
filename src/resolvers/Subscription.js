function newTshirtSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.tshirt({ mutation_in: ['CREATED'] }).node()
  }
  function newPubSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.pub({ mutation_in: ['CREATED'] }).node()
  }
  
  const newTshirt = {
    subscribe: newTshirtSubscribe,
    resolve: payload => {
      return payload
    },
  }
  const newPub = {
    subscribe: newPubSubscribe,
    resolve: payload => {
      return payload
    },
  }
  
  module.exports = {
    newTshirt,
    newPub
  }