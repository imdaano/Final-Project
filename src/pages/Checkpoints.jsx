import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReusableButton from "../components/Button";
import {
  deleteCheckpoint,
  getCheckpoints,
} from "../redux/checkpoint/checkpoint.functions";
import './styles/Checkpoints.scss';

const Checkpoints = () => {
  const dispatch = useDispatch([]);
  const { checkpoints, isLoading, error } = useSelector(
    (state) => state.checkpoints
  );
  useEffect(() => {
    dispatch(getCheckpoints("/"));
  }, []);

  return (
    <div className="checkpoint--container">
      <main>
        <div className="checkpoints">
          <h1>Checkpoints</h1>
          {isLoading && "Cargando"}
          {error && error.message}
          {checkpoints &&
            checkpoints.map((checkpoint) => {
              return (
                <div className="checkpoint_card" key={checkpoint.name}>
                  <h2>{checkpoint.name}</h2>
                  <img src={checkpoint.img} alt={checkpoint.name} />
                
                  <ReusableButton
                    clase={"checkpoint--btn"}
                    text={
                      <Link to={`/checkpoints/${checkpoint.name}`}>
                        Ver más
                      </Link>
                    }
                  />
                </div>
              );
            })}
        </div>
      </main>
      {/*NAVBAR*/}
    </div>
  );
};

export default Checkpoints;
