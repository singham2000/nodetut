const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        blogBody: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
