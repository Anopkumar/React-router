import { useLoaderData } from "react-router-dom";


const UserDeatails = () => {

    const user = useLoaderData();
    const { name , website , phone  } = user
    return (
        <div>
            <h1 className="text-xl font-bold">Deatail about User:{name}</h1>
            <p> Phone:{phone}</p>
            <p>Connect with me:{website}</p>
            
        </div>
    );
};

export default UserDeatails;