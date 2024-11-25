import express from "express";
import tweetRouter from '../tweet.js'

const router = express.Router();


router.use('/tweets', tweetRouter)

router.get('/',(req,res)=>{

    return res.json({
        message: "v1"
    })



})

export default router;
