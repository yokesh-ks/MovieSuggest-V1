import fetch from 'node-fetch';
import redis from "redis";
import { promisify } from "util";

const client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

const setAsync = promisify(client.set).bind(client);

const key = "323d4945e25d915c94696bad63e0db98";
// page 42, 45, 94, 95, 145
export default async function FetchMovies() {
    const allMovies = [];
    const allcategory = [];

    for(let page = 1; page<1000;){
        const response = await fetch(`https://api.themoviedb.org/4/list/${page}?api_key=${key}`);
        const movies = await response.json();
        const res = movies.results;
        const status = movies.status_code;
        if(status){
            page++;
        }else{
            const count = res.length;
            if(count === 0){
                page++
            }
            else{
                allMovies.push(...res);
                const id = movies.id;
                const name = movies.name;
                const object_ids = movies.object_ids
                const category={id, name, object_ids}
                allcategory.push(category);
                page++;
            }
            console.log("got", count, 'movies', "page", page);
        }
        
        
    }
    console.log("total movies", allMovies.length)
    console.log("total cat", allcategory.length)

    const success1 = await setAsync('movies', JSON.stringify(allMovies))
    const success2 = await setAsync('category', JSON.stringify(allcategory))
    console.log({success1})
    console.log({success2})
}


FetchMovies();