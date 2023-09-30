/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const Post = ({ post }) => {
    const { title , body } = post
    return (
        <div className="border-2 border-red-900 rounded-lg mb-3">
            <h1 className="text-xl">Name:{title}</h1>
            <p>Post:{body}</p>
            <Link to ={`/post/${post.id}`}>Show Post</Link>
            
        </div>
    );
};

export default Post;