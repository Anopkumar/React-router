/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const User = ({ user }) => {
    const {id ,  name , email , phone } = user
    return (
        <div className= " border-2 border-red-900 rounded-lg">
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
           <Link to={`/user/${user.id}`}>Show Deatels</Link>
            
        </div>
    );
};

export default User;