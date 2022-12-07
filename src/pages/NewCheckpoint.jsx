import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReusableButton from "../components/Button";
import { postNewCheckpoint } from "../redux/checkpoint/checkpoint.functions";
import "./styles/CreateForm.scss";

const NewCheckpoint = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const postCheckpoint = (dataForm) => {
    const formData = new FormData();
    formData.append("name", dataForm.name);
    formData.append("img", dataForm.img[0]);
    formData.append("type", "Point");
    formData.append("coordinates", JSON.stringify([dataForm.latitud, dataForm.longitud]));
    formData.append("address", dataForm.address);
    formData.append("phone", dataForm.phone);
    console.log();
    dispatch(postNewCheckpoint(formData, navigate));
  };

  return (
    <div className="create">
      <div className="container">
        <h1>New Checkpoint</h1>
        <form onSubmit={handleSubmit(postCheckpoint)} encType="multipart/form-data">
          <label>
            Name
            <input
              type="text"
              name="name"
              {...register("name", {
                required: "Checkpoint Name",
              })}
            />
          </label>
          {errors.name ? (
            <>
              {errors.name.type === "required" && <p>{errors.name.message}</p>}
            </>
          ) : null}
          <label>
            Photo
            <input
              type="file"
              name="img"
              {...register("img", {
                required: "Inserta una imagen",
              })}
            />
          </label>
          {errors.img ? <p>Upload an image</p> : null}
          <label>
            Latitude
            <input
              type="text"
              name="latitud"
              {...register("latitud", {
                required: "Enter the coordinates",
              })}
            />
          </label>
          {errors.latitud ? <p>Enter the coordinates</p> : null}
          <label>
            Longitude
            <input
              type="text"
              name="longitud"
              {...register("longitud", {
                required: "Enter the coordinates",
              })}
            />
          </label>
          {errors.longitud ? <p>Enter the coordinates</p> : null}

          <label>
            Address
            <textarea
              rows="3"
              name="address"
              {...register("address", {
                required: "Enter the direction",
              })}
            />
          </label>
          {errors.genre ? <p>Enter the direction</p> : null}
          <label>
            Phone Number
            <input
              type="text"
              name="phone"
              {...register("phone", {
                required: "Enter the phone number",
              })}
            />
          </label>
          {errors.synopsis ? <p>Enter the phone number</p> : null}

          <ReusableButton clase={"newCheckpoint--btn"} text={"Create"} />
        </form>
      </div>
    </div>
  );
};

export default NewCheckpoint;
