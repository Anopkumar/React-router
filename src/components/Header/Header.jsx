import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            
            <h1 className="text-2xl">Home</h1>
            <Link to="/">Home</Link>
            <Link className="mx-5" to="/users" >Our Users</Link>
            <Link className="mx-4" to="/about">About</Link>
            <Link className="font-bold" to="/posts">Posts</Link>
           
            <Link className="ml-6"  to="/contack">Jojajog</Link>
            
       
           
            
            
        </div>
    );
};

export default Header;