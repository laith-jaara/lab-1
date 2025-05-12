

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = '66b14d93e5f65ce903a434873027664d';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(response => setMovies(response.data.results))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Popular Movies</h2>
            <div className="row">
                {movies.map(movie => (
                    <div className="col-md-3 mb-4" key={movie.id}>
                        <div className="card h-100">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                className="card-img-top"
                                alt={movie.title}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{movie.title}</h5>
                                <Link to={`/movies/${movie.id}`} className="btn btn-primary mt-auto">Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;