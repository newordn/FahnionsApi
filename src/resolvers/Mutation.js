


async function tshirt(parent,args,context,info)
{
    let files = await Promise.all(args.files.map(async v=>await context.storeUpload(v)))
    files = files.map(v=>v.path)
    const tshirt = await context.prisma.createTshirt({...args,images:files})
    return tshirt
}


module.exports={
    tshirt
}