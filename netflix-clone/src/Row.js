import React, { useEffect, useState } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // a snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [movies]);

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

export default Row;
