


async function tshirt(parent,args,context,info)
{
    const tshirt = await context.prisma.createTshirt({...args})
    return tshirt
}


module.exports={
    tshirt
}