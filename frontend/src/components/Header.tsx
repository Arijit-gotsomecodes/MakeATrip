
import { Link } from 'react-router-dom';

const Header = () => { 
    return (
        <div className="bg-blue-700 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-amber-100 font-bold tracking-tight">
                    <Link to="/">MakeAtrip.com</Link>
                </span>
                <span className='flex space-x-2'>
                    <Link to="/signin" className="flex items-center bg-amber-100 text-blue-700 px-4 py-2 rounded-lg font-bold hover:bg-amber-200 transition-all duration-300">Sign In</Link>
                </span>
            </div>
        </div>
    )
}

export default Header; 