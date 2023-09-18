// Link component from react router dom. Replaces anchor tags. Also href -> to.
// This helps keep the entire page from rerendering. Only the content will.
// useMatch is used to compare path data.
// useResolvedPath returns the full, entire path of your url.
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                AutoMarket
            </Link>
            <ul>
                <CustomLink to="/Auctions">Auctions</CustomLink>
                <CustomLink to="/About">About</CustomLink>
            </ul>
        </nav>
    );
};

// Set nav links to active state.
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    // end: true, is used to compared path from start to end.
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Navbar;
