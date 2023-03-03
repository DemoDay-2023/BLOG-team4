const { request, response } = require("express");
const CommentModel = require("../helper/commentModel");


exports.createComment = async (request, response, next) => {
  try {
    const createComment = await CommentModel.create(request.body);
    response
    .status(201)
    .json({ message: `new Comment create`, data: createComment });
  } catch (error) {
    response
      .status(400)
      .json({ message: error });
  }
};

exports.getComment = async (request, response, next) => {
  const { id } = request.params;
  try {
    const comment = await CommentModel.findById(id);
    response.status(200).json({
      message: true,
      data: comment,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.getComments = async (request, response, next) => {
  try {
    const comment = await CommentModel.find().limit(5);
    response.status(200).json({
      message: true,
      data: comment,
    }); 
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.deleteComment = async (request, response) => {
  const { id } = request.params;
  try {
    const comment = await CommentModel.findByIdAndDelete(id);
    response.status(200).json({
      message: `Comment with ${request.params.id} id is delete`,
      data: comment,
    });
  } catch (error) {
    response.status(400).json({ 
      message: error,  
      data: null
    });
  }
};
