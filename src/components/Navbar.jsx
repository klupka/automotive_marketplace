const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Site Title
            </a>
            <ul>
                <li>
                    <a href="/">Auctions</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
