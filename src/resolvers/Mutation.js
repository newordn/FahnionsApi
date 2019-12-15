
async function tshirt(parent,args,context,info)
{
    let files = await Promise.all(args.images.map(async v=>await context.storeUpload(v)))
    files = files.map(v=>v.path)
    const tshirt = await context.prisma.createTshirt({...args,images:{set:files}})
    return tshirt
}
async function pub(parent,args,context,info)
{
    let files = await Promise.all(args.images.map(async v=>await context.storeUpload(v)))
    files = files.map(v=>v.path)
    const pub = await context.prisma.createPub({...args,medias:{set:files}})
    return pub
}

module.exports={
    tshirt,
    pub
}