import "../assets/css/Cards.css";
import { cars } from "../assets/sample_data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGauge } from "@fortawesome/free-solid-svg-icons";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Card({ ...car }) {
    let index = car.Index;
    let image = car.Image;
    let year = car.Year;
    let brand = car.Brand;
    let model = car.Model;
    let mileage = car.Mileage;
    let location = car.Location;
    let timeLeft = car.TimeLeft;
    let price = car.Price;

    let carName = `${year} ${brand} ${model}`;
    let mileageStr;
    let priceStr;

    // Remove '$' and ',' from price string.
    priceStr = price.slice(1);
    priceStr = priceStr.replace(/,/g, "");
    // Convert price string to int and round to nearest hundred.
    priceStr = parseInt(priceStr);
    priceStr = Math.floor(priceStr / 100) * 100;
    // Convert price int back to string with commas and add '$' to front.
    priceStr = priceStr.toLocaleString();
    priceStr = "$" + priceStr;

    if (mileage > 99999) {
        let roundedValue = mileage.toFixed(3);
        mileageStr = roundedValue.toString();
        mileageStr = mileageStr.slice(0, 3);
        mileageStr = mileageStr + "k mi";
    } else if (mileage < 100000) {
        let roundedValue = mileage.toFixed(2);
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
        <Link to={`/Auction/${index}`} state={{ ...car }} className="card">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${image})` }}
                alt={carName}
            ></div>
            <div className="card-text-box">
                <div className="card-header">
                    <ul>
                        <li>{carName}</li>
                        <li>
                            <span className="bidPriceText">Bid:</span>
                            <span className="priceText">{priceStr}</span>
                        </li>
                    </ul>
                </div>
                <div className="card-details">
                    <ul>
                        <li>{location}</li>
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
                            {timeLeft}
                        </li>
                    </ul>
                </div>
            </div>
        </Link>
    );
}

const Cards = () => {
    // change key soon
    return (
        <div className="cards">
            {cars.map((car) => (
                <Card {...car} key={car.Index} />
            ))}
        </div>
    );
};

export default Cards;
