const articles = async (parent,args,context,info)=>{
    const articles= await context.prisma.shop({id:parent.id}).articles()
    return articles
}

module.exports={
    articles
}