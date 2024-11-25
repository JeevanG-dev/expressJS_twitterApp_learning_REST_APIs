export const commented = (req,res)=>{
    return res.json({
        message: "commented"
    })
}

export const getComment = (req,res)=>{
    return res.json({
        message:"commented",
        comment: req.params.comment
    })
}