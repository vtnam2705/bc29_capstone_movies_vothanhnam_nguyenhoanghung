import React from "react";
import Carousel from "../../modules/Carousel/carousel";
import MovieList from "../../modules/movie-list/movie-list";

const styleCarousel = {
  background: "black",
};

export default function Home() {
  return (
    <div id="HomePage">
      <div id="carousel" style={styleCarousel}>
        <Carousel />
      </div>
      <div id="listMovies" className="pb-5">
        <MovieList />
      </div>
    </div>
  );
}
