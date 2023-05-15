import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Ammar's Website</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about" style={{
                    color: 'white',
                    backgroundColor:'#f1356d',
                    borderRadius: '8px'
                }}>About</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;