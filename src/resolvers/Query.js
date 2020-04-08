const info= ()=>`Welcome to Fahnions GraphQl Api`

async function tshirts(parent,args,context,info){
    console.log('tshirts query')
    let tshirts = await context.prisma.tshirts({orderBy:'id_DESC'})
    
    return tshirts
}

async function pubs(parent,args,context,info){
    console.log('pubs query')
    let pubs = await context.prisma.pubs({orderBy:'id_DESC'})
    
    return pubs
}
async function profils(parent,args,context,info){
    console.log('profils query')
    let profils = await context.prisma.profils({orderBy:'id_DESC'})
    
    return profils
}
module.exports={
   info,
    tshirts,
    pubs,
    profils
}