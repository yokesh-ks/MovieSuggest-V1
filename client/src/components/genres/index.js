import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setGenre } from '../../redux/action/moviesAction';

function Action() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.allMovies.movies);

    console.log(movies[0])
    var genre={
        Action : [],
        Adventure : [],
        Animation : [],
        Comedy : [],
        Crime : [],
        Documentary : [],
        Drama : [],
        Family : [],
        Fantasy : [],
        History : [],
        Horror : [],
        Music : [],
        Mystery : [],
        Romance : [],
        Science_Fiction : [],
        TVMovie : [],
        Thriller : [],
        War : [],
        Western : [],
    }
    var length = movies.length;
    for(let i=0; i<length; i++){
        var genreId = movies[i].genre_ids
        genreId.forEach(element => {
            switch (element) {
                case 28:
                    return genre.Action.push(movies[i]);
                case 12:
                    return genre.Adventure.push(movies[i]);
                case 16:
                    return genre.Animation.push(movies[i]);
                case 35:
                    return genre.Comedy.push(movies[i]);
                case 80:
                    return genre.Crime.push(movies[i]);
                case 99:
                    return genre.Documentary.push(movies[i]);
                case 18:
                    return genre.Drama.push(movies[i]);
                case 10751:
                    return genre.Family.push(movies[i]);
                case 14:
                    return genre.Fantasy.push(movies[i]);
                case 36:
                    return genre.History.push(movies[i]);
                case 27:
                    return genre.Horror.push(movies[i]);
                case 10402:
                    return genre.Music.push(movies[i]);
                case 9648:
                    return genre.Mystery.push(movies[i]);
                case 10749:
                    return genre.Romance.push(movies[i]);
                case 878:
                    return genre.Science_Fiction.push(movies[i]);
                case 10770:
                    return genre.TVMovie.push(movies[i]);
                case 53:
                    return genre.Thriller.push(movies[i]);
                case 10752:
                    return genre.War.push(movies[i]);
                case 37:
                    return genre.Western.push(movies[i]);
                default: 
                    return Action
            }
        }); 
    }
    dispatch(setGenre(genre))

    console.log(genre)
    return (
        <div>
            
        </div>
    )
}

export default Action
