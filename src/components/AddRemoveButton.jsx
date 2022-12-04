import React from "react";
import { useDispatch, useSelector, /*useSelector*/ } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../redux/favorites/favorites.functions";
import ReusableButton from "./Button";

const AddRemoveButton = ({book}) => {
    
    const {token} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

	return (
		<>
            {token && !book.inFavorites &&
				(<ReusableButton
					onClick={() => addToFavorites(book, navigate, dispatch)}
					text="Add to Favorites"
				/> )}
            {token && book.inFavorites &&    
				(<ReusableButton
					onClick={() => removeFromFavorites(book, navigate, dispatch)}
					text="Remove from Favorites"
				/>)}
		</>
	);
};

export default AddRemoveButton;