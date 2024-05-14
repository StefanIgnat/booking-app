import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContexts';
import SignOutButton from './SignOutButton';

const Header = () =>{
    const {isLoggedIn} = useAppContext();
    return(
        <div className="bg-grey-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-orange-800 font-bold tracking-tight">
                    <Link to="/">Belair.com</Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn ? <>
                        <Link className='flex items-center text-orange-800 px-3 font-bold hover:bg-white' to="/my-bookings">My Bookings</Link>
                        <Link className='flex items-center text-orange-800 px-3 font-bold hover:bg-white' to="/my-hotels">My Hotels</Link>
                        <SignOutButton/>
                        </> : <Link to="/sign-in" className="flex bg-white items-center text-pink-800 px-3 font-bold hover:bg-gray-100">Sign In</Link> }

                </span>
            </div>
        </div>
    )
}

export default Header;