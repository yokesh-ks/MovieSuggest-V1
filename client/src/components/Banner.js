import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";


function Banner() {
    const [banner, setBanner] = useState({});
    const movies = useSelector((state) => state.allMovies.movies);

    
    function randomBanner(){
        var num = Math.floor(Math.random() * movies.length)
        const banContent = movies[num]
        setBanner(banContent);
    }

    useEffect(() => {
        const interval =setInterval(()=>{
            randomBanner()
        }, 6000)
        return () => {
            clearInterval(interval)
        }
    })

    
    return (
        <div 
            className="bg-black h-96 w-screen bg-cover bg-center" 
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original${banner.backdrop_path}")`,
            }}
        >
            <div className="flex flex-col items-center justify-center h-full text-white gap-5">
                <h2 className="text-5xl font-bold">{banner.original_title}</h2>
                <div className="flex gap-5">
                    <button className="bg-gray-400 hover:bg-gray-500 w-24 py-2 text-white">Play</button>
                    <button className="bg-gray-400 hover:bg-gray-500 w-24 py-2 text-white">View</button>
                </div>
                <p className="text-xl w-9/12">{banner.overview}</p>
            </div>
        
   
        </div> 
    )
}

export default Banner
