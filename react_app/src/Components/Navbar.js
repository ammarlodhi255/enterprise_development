import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/counterRed">Counter With Reducer</Link>
            </div>
            <div>
                <Link to="/counterHover">Hover Counter</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;