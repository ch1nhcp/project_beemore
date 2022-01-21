const commentModel = require("../models/commentModel");

//Get Comments:
const getComments = async(req, res) => {
    try {
        const comments = await commentModel.find({post_id: req.params.id});

        res.json({comments})
    } catch(err) {
        return res.status(500).json({message: err.message})

    }
}

module.exports = {
    getComments,
};