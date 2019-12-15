const moment = require('moment')
const date = async (parent,args,context,info)=>{
    const pub = await context.prisma.pub({id:parent.id})
    return moment(pub.createdAt).fromNow()
}

module.exports={
    date
}