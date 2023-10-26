import "../assets/css/CardsFilter.css";

const CardsFilter = () => {
    return (
        <div className="cards-filter-container">
            <h2>Auctions</h2>
            <select name="sort">
                <option value="PopularNow">Popular Now</option>
                <option value="PriceLowToHigh">Price: Low to High</option>
                <option value="PriceHighToLow">Price: High to Low</option>
                <option value="Newest">Newest</option>
                <option value="Newest">Ending Soon</option>
                <option value="Closest">Closest</option>
            </select>
            <select name="manufacturer">
                <option value="" hidden defaultValue>
                    Manufacturer
                </option>
                <option value="volvo">Ford</option>
                <option value="saab">Chevrolet</option>
                <option value="fiat">Lexus</option>
                <option value="audi">Honda</option>
            </select>
            <select name="transmission">
                <option value="" hidden defaultValue>
                    Transmission
                </option>
                <option value="All">All</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
            </select>
        </div>
    );
};

export default CardsFilter;
