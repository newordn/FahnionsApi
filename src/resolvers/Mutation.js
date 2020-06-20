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
    let avatar = args.avatar
    if(avatar!=null)
    avatar =  await context.storeUpload(args.avatar)
    const password = await bcrypt.hash(args.password,10)
    const profil = await context.prisma.createProfil({...args,avatar:avatar?avatar.path:"",password})
    return profil
}
async function profilConnexion(parent,args,context,info)
{
    console.log('profil connexion mutation')
    const user =  await context.prisma.profil({phone:args.phone})
    if(!user){
        throw new Error("L'utilisateur n'existe pas. Inscrivez-vous")
    }
    const valid = await bcrypt.compare(args.password,user.password)
    if(!valid){
        throw new Error('Mot de passe incorrect')
    }
   
    return user

}
async function shop(parent,args,context,info)
{
    console.log('shop mutation')
    let affiche =  await context.storeUpload(args.affiche)
    const password = await bcrypt.hash(args.password,10)
    const shop = await context.prisma.createShop({...args,affiche:affiche.path,password})
    return shop
}
async function article(parent,args,context,info)
{
    console.log('article mutation')
    let images = await Promise.all(args.images.map(async v=>await context.storeUpload(v)))
    images = images.map(v=>v.path)
    const article = await context.prisma.createArticle({...args,shop:{connect:{id:args.shop}},images:{set:images}})
    return article
}

module.exports={
    tshirt,
    pub,
    profil,
    shop,
    profilConnexion,
    article
}