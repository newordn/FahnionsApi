const moment = require('moment')
const date = async (parent,args,context,info)=>{
    const profil = await context.prisma.profil({id:parent.id})
    return moment(profil.createdAt).fromNow()
}

module.exports={
    date
}