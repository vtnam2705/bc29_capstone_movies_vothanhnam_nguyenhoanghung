import React, { useEffect, useState } from "react";
import { fetchMovieListApi } from "../../services/movie";
import { Carousel as CarouselAntd } from "antd";

const contentStyle = {
  height: "100vh",
  width: "100vw",
  padding: "50px",
  backgroundSize: 'cover',
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

export default function Carousel() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    const result = await fetchMovieListApi();

    setMovieList(result.data.content);
  };

  const renderCarousel = () => {
    return movieList.map((ele, idx) => {
      return (
        <div key={idx} className="carousel-item">
          <img
            style={contentStyle}
            className="card_img d-block w-100"
            src={ele.hinhAnh}
            alt='Images'
          />
        </div>
      );
    });
  };

  return (
    <CarouselAntd autoplay className="container">
      {renderCarousel()}
    </CarouselAntd>
  );
}
