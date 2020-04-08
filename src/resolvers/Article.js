const shop= async (parent,args,context,info)=>{
    const shop= await context.prisma.article({id:parent.id}).shop()
    return shop
}

module.exports={
    shop
}