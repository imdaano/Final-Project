import React from "react";
import { /*useDispatch,*/ useSelector } from "react-redux";
import ReusableButton from "../components/Button";
import Books from "./Books";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  // const dispatch = useDispatch();

  return (
    <div>
      <ReusableButton
        text="Remove all"
        // Hacer dispatch de "removeAll"
      />
      <div className="movies-cart">
        {favorites.map((movie) => (
          <Books key={JSON.stringify(movie)} movie={movie} cartDown={true} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
