const Posts = require('../models/postModels');

//user controller for authentication
const postsCtrl = {
getPosts: async(req, res) =>{
        try {
            const posts = await Posts.find()
            res.json(posts)
    
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
},
createPost: async(req,res) => {
        try{
            const{post_id, user, post, images} = req.body;

            const pst = await Posts.findOne({post_id})
            if(pst) return res.status(400).json({msg: 'You already made this post'})

            const newPost = new Posts({
                post_id, user, post, images
            })
            //Save Post to MongoDB
            await newPost.save()
            res.json({accesstoken})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
},
deletePost: async(req, res) => {
    try {
        await Posts.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Product"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

}
}

module.exports = postsCtrl