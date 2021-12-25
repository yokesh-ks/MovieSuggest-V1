import express, { json } from "express";
import cors from "cors"
import redis from "redis";
import { promisify } from "util";

const client = redis.createClient();
client.on("error", function (err) {
    console.log("Error " + err);
});

const port = process.env.PORT || 4000;
const app = express();

const getAsync = promisify(client.get).bind(client);

// middleware
app.use(json());
app.use(cors());


// Routes
app.get('/allmovies', async function(req,res){
    const movies = await getAsync('movies')
    return res.json(movies);
})

app.get('/allCat', async function(req, res){
    const category = await getAsync('category')
    return res.json(category);
})


app.listen(port, function(){
    console.log("server is running at ", port)
})