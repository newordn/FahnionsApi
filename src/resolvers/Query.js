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
async function shops(parent,args,context,info){
    console.log('shops query')
    let shops = await context.prisma.shops({orderBy:'id_DESC'})
    return shops
}
async function articlesByShop(parent,args,context,info){
    console.log('articles by shop query')
    let articles = await context.prisma.shop({id:args.shopId}).articles()
    return articles
}
module.exports={
   info,
    tshirts,
    pubs,
    profils,
    shops,
    articlesByShop
}