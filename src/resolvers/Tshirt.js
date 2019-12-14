const moment = require('moment')
const date = async (parent,args,context,info)=>{
    const tshirt = await context.prisma.tshirt({id:parent.id})
    return moment(tshirt.createdAt).fromNow()
}

module.exports={
    date
}