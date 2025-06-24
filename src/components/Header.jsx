import moment from 'moment';
import logo from '../assets/logo.png';
const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-2 mt-2'>
                <img src={logo} className='w-[300px]' alt="" srcset="" />
                <p className='text-gray-400 '>Fresh Perspectives. Trusted Reporting</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;