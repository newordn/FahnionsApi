const info= ()=>`Welcome to Fahnions GraphQl Api`

async function tshirts(parent,args,context,info){
    let tshirts = await context.prisma.tshirts({orderBy:'id_DESC'})
    
    return tshirts
}

async function pubs(parent,args,context,info){
    let pubs = await context.prisma.pubs({orderBy:'id_DESC'})
    
    return pubs
}
module.exports={
   info,
    tshirts,
    pubs
}