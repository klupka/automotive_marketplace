import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://api.carmd.com/v3.0/make?year=2015";

const FetchData = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await axios(BASE_URL, {
                headers: {
                    "content-type": "application/json",
                    authorization:
                        "Basic MTFlOWIyMDQtZjUxOC00NjFmLThhZGEtNzc2NmI3OTRjYWZl",
                    "partner-token": "f3c26d3a37a14e89a27e354afa48f451",
                },
            });
            console.log(resp);
        } catch (error) {}
    };

    return (
        <>
            <button onClick={fetchData}>get data</button>
        </>
    );
};
export default FetchData;
