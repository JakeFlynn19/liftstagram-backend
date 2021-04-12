const Post = require('../models/post');


async function index(req, res) {
   try {
       const posts = await Post.find({ uid: req.query.uid }).sort('-exercise');
       res.status(200).json(posts);
   } catch (error) {
       console.log(error);
       res.status(400).json({ error: 'something went wrong' });
   }
}

async function create(req, res) {
    try {
        const post = await Post.create(req.body);
        req.query.uid = post.uid;
        index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}

async function deletePost(req, res) {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        req.query.uid = deletedPost.uid;
        index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}


async function update(req, res) {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
            );
            req.query.uid = updatedPost.uid;
            index(req, res);
        } catch (error) {
            res.status(401).json({ error: 'something went wrong' });
    }
}

module.exports = {
    index,
    create,
    delete: deletePost,
    update
};