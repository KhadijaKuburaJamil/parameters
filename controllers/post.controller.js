const getPosts = (req, res) => {
    res.status(200).send(`Get all Posts filtered by "${req.query.title}"`);
};
const getPost = (req, res) => {
    res.status(201).send(`Post with ID ${req.params.postId} has been retrieved`)
};
const createPost =(req, res) => {
    res.status(200).send("Create post");
};
const updatePost =(req, res) =>{
    res.status(201).send(`Post with ID ${req.params.postId} has been updated successfully`)
};
const deletePost =(req, res) =>{
    res.status(201).send(`Post with ID ${req.params.postId} has been deleted`)
};



module.exports={
    getPost,
    getPosts,
    createPost,
    updatePost,
    deletePost
};