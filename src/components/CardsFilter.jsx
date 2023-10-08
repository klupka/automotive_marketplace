import "../assets/CardsFilter.css";

const CardsFilter = () => {
    return (
        <div className="cards-filter-container">
            <label htmlFor="sort">Sort by : </label>
            <select id="sort" name="sort">
                <option value="PriceLowToHigh">Price: Low to High</option>
                <option value="PriceHighToLow">Price: High to Low</option>
                <option value="Newest">Newest</option>
                <option value="Closest">Closest</option>
            </select>
            <label htmlFor="cars">Brand : </label>
            <select id="cars" name="cars">
                <option value="volvo">Ford</option>
                <option value="saab">Chevrolet</option>
                <option value="fiat">Lexus</option>
                <option value="audi">Honda</option>
            </select>
            <input type="radio" value="Shipping" name="gender" /> Shipping
            <input type="radio" value="Local" name="gender" /> Local
        </div>
    );
};

export default CardsFilter;
