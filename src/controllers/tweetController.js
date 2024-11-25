




export const tweetController = (req,res)=>{
    return res.json({
        message: "tweeted"
    })
}

export const getTweetById = (req,res)=>{

    return res.json({
        message: "tweeted",
        id:req.params.id
    })
}

export const createPost = (req,res)=>{
    return res.json({
        message :"welcome to tweet post",
        body : req.body
    
        

    })
  
}