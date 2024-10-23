import SOSIcon from '../icons/SOSIcon';
import GearIcon from '../icons/GearIcon';

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
            <h1 className="text-xl font-bold">Welcome, John Doe!</h1>
            <div className="flex gap-4">
                <SOSIcon />
                <GearIcon />
            </div>
        </div>
    );
};

export default Header;
