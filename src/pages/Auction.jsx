import "../assets/css/General.css";
import "../assets/css/Auction.css";
import { useLocation } from "react-router-dom";
import { cars } from "../assets/sample_data";

const Auction = () => {
    const reactLocation = useLocation();
    const car = reactLocation.state;

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
    let numOfImages = 50;
    let allImagesStr = `All Images (${numOfImages})`;

    return (
        <div className="page-animation">
            <h2>{carName}</h2>
            <div className="images-container">
                <div className="main-image-container">
                    <img src={image} alt={"Auction images of " + carName}></img>
                </div>
                <div className="side-images-container">
                    <img src={image} alt={"Auction images of " + carName}></img>
                    <img src={image} alt={"Auction images of " + carName}></img>
                    <img src={image} alt={"Auction images of " + carName}></img>
                    <img src={image} alt={"Auction images of " + carName}></img>
                    <img src={image} alt={"Auction images of " + carName}></img>
                    <img src={image} alt={"Auction images of " + carName}></img>
                    <img src={image} alt={"Auction images of " + carName}></img>
                    <div className="all-images-container">
                        <img
                            src={image}
                            alt={"Auction images of " + carName}
                        ></img>
                        <div>{allImagesStr}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auction;
