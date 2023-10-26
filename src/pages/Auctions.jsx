import Cards from "../components/Cards";
import CardsFilter from "../components/CardsFilter";
import "../assets/css/General.css";

const Auctions = () => {
    return (
        <div className="page-animation">
            <CardsFilter />
            <Cards />
        </div>
    );
};

export default Auctions;
