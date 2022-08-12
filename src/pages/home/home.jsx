import { Button } from 'bootstrap'
import React from 'react'
import Carousel from '../../modules/Carousel/carousel'
import MovieList from '../../modules/movie-list/movie-list'

export default function Home() {
    return (
        <div id="listMovies" className="container pt-5">
            <Carousel/>
            <MovieList/>
        </div>
    )
}
