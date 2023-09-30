/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import User from "../user/User";

const Users = () => {

    const users = useLoaderData()
    console.log(users)


    return (
        <div >
            <h1>Our users:{users.length}</h1>
            <p>Most fantastic and cool Users</p>
            <div className="grid grid-cols-3 gap-3">
                {
                    users.map(user=><User key ={user.id} user={user}></User>)
                }
            </div>
            
        </div>
   
    );
};

export default Users;