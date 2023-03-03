const express = require("express");
const router = express.Router();
const { getComment , 
        getComments, 
        createComment, 
        deleteComment } = require('../controller/commentController');

router

.post(   "/", createComment)
.get(    "/", getComments)
.get(    "/:id", getComment)
.delete( "/:id", deleteComment)

module.exports = router;