const { model, Schema } = require("mongoose");

const CommentSchema = new Schema({
  email: String,
  comment:String,
  registerDate: { type: Date, default: Date.now },
});
const CommentModel = model("Comment", CommentSchema);
module.exports = CommentModel;
