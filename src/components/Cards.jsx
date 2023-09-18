import "../assets/Cards.css";

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
    const carName = `${year} ${brand} ${model}`;
    const bgImage = `background-image:url('${imageURL}')`;
    const priceStr = `$${price}`;
    const mileageStr = `${mileage} mi`;
    return (
        <div className="card">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${imageURL})` }}
                alt={carName}
            ></div>
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
    );
}

const Cards = () => {
    return (
        <div className="cards-container">
            <Card
                imageURL="https://totallythatstupid.files.wordpress.com/2014/07/gw_640.jpg?w=640"
                year="1998"
                brand="Lexus"
                model="IS 300"
                mileage="10,590"
                price="9,790"
                location="San Antonio, TX 78154"
                timeLeft="10h 53m"
            />
            <Card
                imageURL="https://totallythatstupid.files.wordpress.com/2014/07/gw_640.jpg?w=640"
                year="1998"
                brand="Lexus"
                model="IS 300"
                mileage="10,590"
                price="9,790"
                location="San Antonio, TX 78154"
                timeLeft="10h 53m"
            />
            <Card
                imageURL="https://totallythatstupid.files.wordpress.com/2014/07/gw_640.jpg?w=640"
                year="1998"
                brand="Lexus"
                model="IS 300"
                mileage="10,590"
                price="9,790"
                location="San Antonio, TX 78154"
                timeLeft="10h 53m"
            />
        </div>
    );
};

export default Cards;
