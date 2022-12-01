import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCheckpoints } from '../redux/checkpoint/checkpointFunctions';

const Checkpoints = () => {
  const dispatch = useDispatch([]);
  const { checkpoints, isLoading, error } = useSelector(
    (state) => state.checkpoints
  );
    useEffect(() => {
        dispatch(getCheckpoints('/'));
    }, []);

    console.log(checkpoints);

return (
    <div className="checkpoints">
         <h1>Checkpoints</h1>
        {isLoading && "Cargando"}
        {error && error.message}
        {checkpoints && checkpoints.map((checkpoint) => {
            return (
                <div key={checkpoint.name}>
                    <h2>{checkpoint.name}</h2>
                    <img src={checkpoint.img} alt={checkpoint.name} />
                </div>
            )
        })}
    </div>
  )
};

export default Checkpoints;
