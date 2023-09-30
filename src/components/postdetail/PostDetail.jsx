import { useLoaderData } from "react-router-dom";


const PostDetail = () => {
const post = useLoaderData()
const {body , title } = post
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            
        </div>
    );
};

export default PostDetail;