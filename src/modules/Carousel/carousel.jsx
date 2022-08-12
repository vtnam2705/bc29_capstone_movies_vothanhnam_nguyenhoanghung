import React, { useEffect, useState } from "react";
import { fetchMovieListApi } from "../../services/movie";
import { Carousel as CarouselAntd } from "antd";

const contentStyle = {
  height: "1000px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
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

  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  const renderCarousel = () => {
    return movieList.map((ele, idx) => {
      return (
        <div key={idx}>
          <img
            style={contentStyle}
            className="card_img img-fluid w-100"
            src={ele.hinhAnh}
          />
        </div>
      );
    });
  };

  return (
    <CarouselAntd autoplay className="container" afterChange={onChange}>
      {renderCarousel()}
    </CarouselAntd>
  );
}
