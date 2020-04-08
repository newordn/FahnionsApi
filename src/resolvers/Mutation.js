const bcrypt = require('bcryptjs')
async function tshirt(parent,args,context,info)
{
    let files = await Promise.all(args.images.map(async v=>await context.storeUpload(v)))
    files = files.map(v=>v.path)
    const tshirt = await context.prisma.createTshirt({...args,images:{set:files}})
    return tshirt
}
async function pub(parent,args,context,info)
{
    let files = await Promise.all(args.medias.map(async v=>await context.storeUpload(v)))
    files = files.map(v=>v.path)
    const pub = await context.prisma.createPub({...args,status:false,medias:{set:files}})
    return pub
}
async function profil(parent,args,context,info)
{
    console.log('profil mutation')
    let avatar =  await context.storeUpload(args.avatar)
    const password = await bcrypt.hash(args.password,10)
    const profil = await context.prisma.createProfil({...args,avatar:avatar.path,password})
    return profil
}

module.exports={
    tshirt,
    pub,
    profil
}