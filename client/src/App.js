//import PageNotFound from "./components/pagenotfound";
import MovieApi from "./api/movieApi";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import CategoryApi from "./api/CategoryApi";

function App() {
  return (
    <div className="container" >
      <Navbar />
      <Home />
      <MovieApi />
      <CategoryApi />
    </div>
  );
}

export default App;
