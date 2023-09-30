import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";


const Posts = () => {

    const posts =useLoaderData()
    console.log(posts)
    return (
        <div>
            <h1>All posts here</h1>
           <div className="grid grid-cols-3  gap-4">
           {
                posts.map(post =><Post key={post.id} post={post}></Post>)
            }
            
           </div>
        </div>
    );
};

export default Posts;