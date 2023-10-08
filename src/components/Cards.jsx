import "../assets/Cards.css";
import { cars } from "../assets/sample_data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGauge } from "@fortawesome/free-solid-svg-icons";

function Card({
    Image,
    Year,
    Brand,
    Model,
    Mileage,
    Location,
    TimeLeft,
    Price,
}) {
    let carName = `${Year} ${Brand} ${Model}`;
    let mileageStr;
    let priceStr;

    // Remove '$' and ',' from price string.
    priceStr = Price.slice(1);
    priceStr = priceStr.replace(/,/g, "");
    // Convert price string to int and round to nearest hundred.
    priceStr = parseInt(priceStr);
    priceStr = Math.floor(priceStr / 100) * 100;
    // Convert price int back to string with commas and add '$' to front.
    priceStr = priceStr.toLocaleString();
    priceStr = "$" + priceStr;

    if (Mileage > 99999) {
        let roundedValue = Mileage.toFixed(3);
        mileageStr = roundedValue.toString();
        mileageStr = mileageStr.slice(0, 3);
        mileageStr = mileageStr + "k mi";
    } else if (Mileage < 100000) {
        let roundedValue = Mileage.toFixed(2);
        mileageStr = roundedValue.toString();
        mileageStr = mileageStr.slice(0, 2);
        mileageStr = mileageStr + "k mi";
    }

    // if name > 30, then cut off name
    if (carName.length > 30) {
        carName = carName.slice(0, 30);
        carName = carName.concat("...");
    }
    return (
        <a href="" className="card">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${Image})` }}
                alt={carName}
            ></div>
            <div className="card-text-box">
                <div className="card-header">
                    <ul>
                        <li>{carName}</li>
                        <li>
                            <span className="bidPriceText">Bid:</span>
                            {priceStr}
                        </li>
                    </ul>
                </div>
                <div className="card-details">
                    <ul>
                        <li>{Location}</li>
                        <li>
                            <span className="mileage-text-icon-container">
                                <span className="clock-mileage-icon">
                                    <FontAwesomeIcon icon={faGauge} />
                                </span>
                                {mileageStr}
                            </span>
                            <span className="clock-mileage-icon">
                                <FontAwesomeIcon icon={faClock} />
                            </span>
                            {TimeLeft}
                        </li>
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
                {cars.map((car) => (
                    <Card {...car} key={car.Price} />
                ))}
            </div>
        </div>
    );
};

export default Cards;
