import express, { json } from "express";
import cors from "cors"
import fetch from "node-fetch";

const key = "323d4945e25d915c94696bad63e0db98";
// page 42, 45, 94, 95, 145
async function FetchMovies() {
  const allMovies = [];
  const allcategory = [];

  for (let page = 500; page < 1000; ) {
    const response = await fetch(
      `https://api.themoviedb.org/4/list/${page}?api_key=${key}`
    );
    const movies = await response.json();
    const res = movies.results;
    const status = movies.status_code;
    if (status) {
      page++;
    } else {
      const count = res.length;
      if (count === 0) {
        page++;
      } else {
        allMovies.push(...res);
        const id = movies.id;
        const name = movies.name;
        const object_ids = movies.object_ids;
        const category = { id, name, object_ids };
        allcategory.push(category);
        page++;
      }
      console.log("got", count, "movies", "page", page);
    }
  }
  console.log("total movies", allMovies.length);
  console.log("total cat", allcategory.length);

  console.log(allMovies);
  console.log(allcategory);
  return allcategory;
}

const port = process.env.PORT || 4000;
const app = express();

// middleware
app.use(json());
app.use(cors());

// Routes
app.get("/allmovies", async function (req, res) {
  const movies = await FetchMovies();
  return res.json(movies);
});

app.listen(port, function () {
  console.log("server is running at ", port);
});
