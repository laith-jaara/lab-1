

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = '66b14d93e5f65ce903a434873027664d';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(response => setMovie(response.data))
            .catch(error => console.error('Error fetching movie details:', error));
    }, [id]);

    if (!movie) return <div className="text-center mt-5">Loading...</div>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-8">
                    <h2>{movie.title}</h2>
                    <p><strong>Rating:</strong> {movie.vote_average}</p>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;