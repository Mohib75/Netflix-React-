import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import requests from "./requests";

// 531447ac0ddfce80610c46a142403bc1

function App() {
    return (
        <div className='App'>
            <h1>Hey Guys!🖐✋</h1>
            <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
            {/* <Row title='Trending Now' /> */}
            {/* <Row title='Top Rated' />
            <Row title='Action Movies' />
            <Row title='Comedy Movies' />
            <Row title='Horror Movies' />
            <Row title='Horror Movies' /> */}
        </div>
    );
}

export default App;
