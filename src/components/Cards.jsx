import "../assets/Cards.css";
import { cars } from "../assets/sample_data";

function Card({
    imageURL,
    year,
    brand,
    model,
    mileage,
    price,
    location,
    timeLeft,
}) {
    let carName = `${year} ${brand} ${model}`;
    let bgImage = `background-image:url('${imageURL}')`;
    let priceStr = `$${price}`;
    let mileageStr = `${mileage} mi`;

    // if name > 30, then cut off name
    if (carName.length > 30) {
        carName = carName.slice(0, 30);
        carName = carName.concat("...");
    }
    return (
        <a href="" className="card">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${imageURL})` }}
                alt={carName}
            ></div>
            <div className="card-text-box">
                <div className="card-header">
                    <ul>
                        <li>{carName}</li>
                        <li>{priceStr}</li>
                    </ul>
                </div>
                <div className="card-details">
                    <ul>
                        <li>{location}</li>
                        <li>{timeLeft}</li>
                    </ul>
                </div>
            </div>
        </a>
    );
}

const Cards = () => {
    // change key soon
    return (
        <div className="cards-flexbox">
            <div className="cards-container">
                {" "}
                {cars.map((car) => (
                    <Card {...car} key={car.price} />
                ))}
            </div>
        </div>
    );
};

export default Cards;
