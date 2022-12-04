import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ReusableButton from "../components/Button";
import { putCheckpoint } from "../redux/checkpoint/checkpoint.functions";
import "./styles/CreateForm.scss";

const EditCheckpoint = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { checkpoint, error, isLoading } = useSelector(
    (state) => state.checkpoints
  );
  const editCheckpoint = (dataForm) => {
    const formData = new FormData();
    formData.append("name", dataForm.name);
    formData.append("img", dataForm.img);
    formData.append(
      "location",
      JSON.stringify({
        type: "Point",
        coordinates: [dataForm.latitud, dataForm.longitud],
      })
    );
    formData.append("address", dataForm.address);
    formData.append("phone", dataForm.phone);
    dispatch(putCheckpoint(checkpoint._id, formData, navigate));
  };
  console.log(checkpoint);
  return (
    <div className="create">
      <div className="container">
        {error && <h2 className="error">{error.message}</h2>}
        {isLoading && <h2 className="loading">Editing checkpoint...</h2>}
        <h1>Edit Checkpoint</h1>
        <form onSubmit={handleSubmit(editCheckpoint)}>
          <div className="back">
            <ReusableButton
              clase={"back--btn"}
              text={
                <Link to={"/checkpoints"}>
                  <img
                    src="/assetsFront/images/back.png"
                    alt="back"
                    className="bck--btn"
                  />
                </Link>
              }
            />
          </div>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              defaultValue={checkpoint.name}
              {...register("name", {
                // required: "Introduce un nombre",
              })}
            />
          </label>
          {errors.name && <p>{errors.name.message}</p>}
          <label>
            <p>Photo</p>
            <input
              type="file"
              name="img"
              {...register("img", {
                // required: "Introduce una imagen",
              })}
            />
          </label>
          {errors.img && <p>{errors.img.message}</p>}
          <label>
            {console.log(checkpoint)}
            Latitude
            <input
              type="text"
              name="latitud"
              defaultValue={checkpoint.location.coordinates[0]}
              {...register("latitud")}
            />
          </label>
          <label>
            Length
            <input
              type="text"
              name="longitud"
              defaultValue={checkpoint.location.coordinates[1]}
              {...register("longitud")}
            />
          </label>
          <label>
            <p>Address</p>
            <input
              type="text"
              name="address"
              defaultValue={checkpoint.address}
              {...register("address")}
            />
          </label>
          <label>
            <p>Phone Number</p>
            <input
              type="text"
              name="phone"
              defaultValue={checkpoint.phone}
              {...register("phone")}
            />
          </label>
          <ReusableButton clase={"update--btn"} text={"Edit"} />
        </form>
      </div>
    </div>
  );
};

export default EditCheckpoint;
