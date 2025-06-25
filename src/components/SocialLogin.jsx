import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const SocialLogin = () => {
    return (
        <div className=" ">
            <h2 className='font-semibold'>Login With</h2>
            <div className="*:w-full space-y-2 mt-4">
                <button className="flex items-center gap-2 text-blue-500 border-2 border-blue-500 rounded-lg p-2 justify-center">
               <FaGoogle /> Login With Google
            </button>
            <button className="flex items-center gap-2  border-2 border-black rounded-lg p-2 justify-center">
                <FaGithub />
                Login With GitHub
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;