
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3] font-poppins'>
            <header className=' w-11/12 mx-auto pt-3'>
                <NavBar></NavBar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;