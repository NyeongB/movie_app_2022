import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    //console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    // 영화 데이터 로딩
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <>
        {isLoading
          ? "Lodaing..."
          : movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.poster}
                ></Movie>
              );
            })}
      </>
    );
  }
}

export default App;
