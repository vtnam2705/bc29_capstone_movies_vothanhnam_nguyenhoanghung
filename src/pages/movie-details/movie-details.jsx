import React from "react";
import Details from "../../modules/details/movie-details";
import ShowTime from "../../modules/show-time/show-time";

export default function MovieDetails() {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Details/>
                    </div>

          <div className="col-12 mt-5">
            <ShowTime />
          </div>
        </div>
      </div>
    </div>
  );
}
