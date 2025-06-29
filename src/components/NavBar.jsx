import { Link } from "react-router-dom";
import userProfile from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const NavBar = () => {
    const {user,logOut} = useContext(AuthContext);
    return (
        <div className="flex flex-col md:flex-row justify-between items-center pt-5">
            <div>{user&& user.email}</div>
            <div className="space-x-4 text-[#706F6F]">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div>
                <div className="flex  justify-center items-center space-x-2">
                    <img src={userProfile} alt="" srcset="" />
                    {
                        user && user.email ?
                        <button className="bg-[#403F3F] text-white p-2 rounded-lg" onClick={logOut}>LogOut</button>
                        
                        
                        :
                         <Link to="/auth/login" className="bg-[#403F3F] text-white p-2 rounded-lg">Login</Link>
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default NavBar;