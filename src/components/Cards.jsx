import "../assets/Cards.css";

function Card({ imageURL, year, brand, model }) {
    const carName = `${year} ${brand} ${model}`;
    const bgImage = `background-image:url('${imageURL}')`;
    return (
        <div className="card">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${imageURL})` }}
                alt={carName}
            ></div>
            <div className="card-title">{carName}</div>
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
            />
            <Card
                imageURL="https://totallythatstupid.files.wordpress.com/2014/07/gw_640.jpg?w=640"
                year="1998"
                brand="Lexus"
                model="IS 300"
            />
            <Card
                imageURL="https://totallythatstupid.files.wordpress.com/2014/07/gw_640.jpg?w=640"
                year="1998"
                brand="Lexus"
                model="IS 300"
            />
        </div>
    );
};

export default Cards;
