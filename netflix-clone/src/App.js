import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

// 531447ac0ddfce80610c46a142403bc1

function App() {
    return (
        <div className='App'>
            <Nav />
            <Banner />
            <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default App;
