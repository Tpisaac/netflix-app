import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import request from "../Request";

const Home = () => {
  return (
    <div>
      <Hero />
      <Row rowId="1" title="UpComing" fetchURL={request.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchURL={request.requestPopular} />
      <Row rowId="3" title="Trending" fetchURL={request.requestTrending} />
      <Row rowId="4" title="Top Rated" fetchURL={request.requestTopRated} />
      <Row rowId="5" title="Horror" fetchURL={request.requestHorror} />
    </div>
  );
};

export default Home;
