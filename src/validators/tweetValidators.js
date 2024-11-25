export const tweetValidators = (req,res,next)=>{

    if(!req.body.tweet){
       return res.status(400).json({
            message:"please tweet"
        })
    }

    if(req.body.tweet.length > 250){
        return res.status(400).json({
            message:"length is too long"
        })
    }
    next()
}