import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setMovies } from '../redux/action/moviesAction.js';

function MovieApi() {
    const dispatch = useDispatch();

    async function getMovies(){

            var config = {
            method: 'get',
            mode: 'no-cors',
            url: 'http://localhost:4000/allmovies',
            headers: { }
            };

            axios(config)
            .then(function (response) {
                const movies = JSON.parse(response.data)
                dispatch(setMovies(movies));
            })
            .catch(function (error) {
            console.log(error);
            });

    }
    

    useEffect(() => {
        getMovies();
    })


    return (
        <div>
            
        </div>
    )
}

export default MovieApi

