import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="container text-center mt-5">
            <h1>Welcome to Movie Explorer 🎬</h1>
            <p>Discover the most popular movies now!</p>
            <img
                src="https://cdn.pixabay.com/photo/2016/03/27/21/59/popcorn-1283796_1280.jpg"
                alt="Cinema"
                className="img-fluid rounded mt-4"
                style={{ maxHeight: '400px' }}
            />
        </div>
    );
}

export default Home;
