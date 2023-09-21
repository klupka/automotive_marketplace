import "../assets/Cards.css";

// Example data
const cars = [
    {
        imageURL:
            "https://bringatrailer.com/wp-content/uploads/2020/01/2003_lexus_is_15820631675ef66e7dff9f98764d2003_lexus_is_1582063166fcd208c652a0e1-af90-4ead-b2ba-431400d2a900-lFawgq.jpg?fit=940%2C627",
        year: "1998",
        brand: "Lexus",
        model: "IS 300",
        mileage: "10,590",
        price: "9,790",
        location: "San Antonio, TX 78154",
        timeLeft: "10h 53m",
    },
    {
        imageURL:
            "https://bringatrailer.com/wp-content/uploads/2022/07/2000_ford_f-350_2000_ford_f-350_9fe63c46-6247-437d-80e4-bbf3097df9a5-lebyz8-23953-88180.jpg",
        year: "2000",
        brand: "Ford",
        model: "F-350 Super Duty Lariat 4x4",
        mileage: "87,700",
        price: "12,500",
        location: "Loveland, OH 45140",
        timeLeft: "00h 1m",
    },
    {
        imageURL:
            "https://www.mustangspecs.com/wp-content/uploads/2022/07/IMG_0944.jpg",
        year: "2017",
        brand: "Ford",
        model: "GT350 Fastback RWD",
        mileage: "32,900",
        price: "62,000",
        location: "Fort Gratiot, MI 48059",
        timeLeft: "23h 16m",
    },
];

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
        <div className="card">
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
        </div>
    );
}

const Cards = () => {
    return (
        <div className="cards-container">
            {cars.map((car) => (
                <Card {...car} key={car.price} />
            ))}
        </div>
    );
};

export default Cards;
