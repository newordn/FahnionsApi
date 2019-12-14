const info= ()=>`Welcome to Fahnions GraphQl Api`

async function tshirts(parent,args,context,info){
    const tshirts = await context.prisma.tshirts({})
    return tshirts
}
module.exports={
   info,
    tshirts
}