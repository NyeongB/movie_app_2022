import React from "react";
import Potato from "./potato";
import PropTypes from "prop-types";
import "./App.css";

function Food({ name, picture, rating }) {
  return (
    <div className="compo">
      <h2>I like {name}.</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

function App2() {
  const foodLike = [
    {
      key: 1,
      name: "Kimchi",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtv5s7-bZ8s5Q_yPm8zRFXm1N5u8hfiC2rgZU57zDZkkfyU3PgltzszMIA84EeQnpBznZErHkNy2aDK8KJZnemMPpEtBWFdqqO7oXSJzHZ&usqp=CAc",
      rating: 5,
    },
    {
      key: 2,
      name: "Samgyeopsal",
      image: "https://dpj8x7518los8.cloudfront.net/2019/06/0-1-1.jpg",
      rating: 3.5,
    },
    {
      key: 3,
      name: "Bibimbap",
      image:
        "https://www.kculture.or.kr/jnrepo/upload/jnBrdBoard/201912/2a64936a26d647eca1c7269fb6b3cf99_1575373232721.jpg",
      rating: 2,
    },
    {
      key: 4,
      name: "Doncasu",
      image:
        "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002274/img/basic/a0002274_main.jpg?20200626102550&q=80&rw=750&rh=536",
      rating: 2,
    },
    {
      key: 5,
      name: "Kimbap",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2017/07/27/aa6a94c863535af15b6a7512af579d6b1.jpg",
      rating: 3,
    },
  ];

  const renderFood = (dish) => (
    <Food
      key={dish.key}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    ></Food>
  );

  return <div>{foodLike.map(renderFood)}</div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
export default App2;
